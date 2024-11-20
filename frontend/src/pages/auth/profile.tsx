import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import useAuthToken from "../../hooks/useAuthToken";
import { EyeClose, EyeOpen, LoadingIcon } from "../../icons/icons";
import { Button } from "../../components/button.comp";
import CustomInputField from "../../components/customInputField.comp";
import { InnerLayout } from "../../components/layout/inner.layout";
import ErrorScreen from "../../components/errorPage";
import LoadingPage from "../../components/loader.comp";
import { IUpdateProfile } from "../../@types/type";
import { getProfile, updateProfile } from "../../core/auth.core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

type State = "init" | "mutating" | "error" | "success";


const Profile: FC = () => {
  const methods = useForm<IUpdateProfile>();
  const [currentState, setCurrentState] = useState<State>("init");
  const [currentState2, setCurrentState2] = useState<State>("init");
  const queryClient = useQueryClient();
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    methods.setValue("first_name", value);
    methods.setValue("last_name", value);
    methods.setValue("phone", value);
    // methods.setValue("email", value);
  
  };
  const { token } = useAuthToken();

  const { isError, isLoading, isSuccess, data } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: () => getProfile(token as string),
  });
  const createMutation = useMutation({
    mutationFn: async (data: IUpdateProfile) =>
      updateProfile(data,token as string, ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["token"] });
   
      toast.success(data.payload);
      setCurrentState("success");
    },
    onMutate: () => {
      setCurrentState("mutating");
    },
    onError: (error: any) => {
      if (error && error.response) {
        const message = error.response.data?.error;
        toast.error(message);
      }
      setCurrentState("error");
    },
  });
  


  useEffect(() => {
    if (isSuccess && data) {
      const admin = data.payload

      methods.setValue("first_name", admin.first_name);
      methods.setValue("last_name", admin.last_name);
      methods.setValue("phone", admin.phone);
      methods.setValue("email", admin.email);
    }
  }, [isSuccess, data, methods]);

  const handleSubmit = (data: IUpdateProfile) => {
    createMutation.mutate({phone:data.phone,first_name:data.first_name,last_name:data.last_name});
  };


  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <ErrorScreen
        message="An unexpected error occurred. Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="lg:px-10">
      <InnerLayout
        heading="Profile"
        section="Dashboard"
        page="Profile"
        url="/dashboard"
      >
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="bg-background gap-y-8 p-1 rounded-md shadow-shadow2 pb-8 "
        >
          <div className="ml-3 mt-8 md:ml-8 lg:ml-8">
            <h3 className="font-semibold text-xl">Profile Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2 lg:grid-cols-3 gap-y-12 p-1 mt-8 ml-3 md:ml-8 lg:ml-8 ">
            <CustomInputField
              methods={methods}
              fieldName="first_name"
              label="First Name"
              placeholder="E.g Mark"
              errorMsg="First name is required"
              handleChange={handleChange}
            />
            <CustomInputField
              methods={methods}
              fieldName="last_name"
              label="Last Name"
              placeholder="E.g Bell"
              errorMsg="Last name is required"
              handleChange={handleChange}
            />{" "}
            <CustomInputField
              methods={methods}
              fieldName="email"
              label="Email"
              placeholder="E.g example@gmail.com"
              errorMsg="Email is required"
              handleChange={handleChange}
              type="email"
              isDisabled={true}
            />{" "}
          
            <CustomInputField
              methods={methods}
              fieldName="phone"
              label="Phone Number"
              placeholder="Phone number"
              errorMsg="Phone number is required"
              handleChange={handleChange}
              rules={{
                pattern: {
                  value: /^\+234\d{10}$/,
                  message: "Invalid phone number. Must start with '+234' followed by 10 digits.",
                },
              }}            />
          </div>
          <div className="ml-3 mt-6 md:ml-8 lg:ml-8  ">
            <label htmlFor="Submit"></label>
            <Button
              type="submit"
              className="px-8 rounded-md"
              disabled={currentState == "mutating" ? true : false}
            >
              {currentState == "mutating" ? (
                <LoadingIcon className="w-6 h-6 text-white" />
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </form>
     
         </InnerLayout>
    </div>
  );
};

export default Profile;
