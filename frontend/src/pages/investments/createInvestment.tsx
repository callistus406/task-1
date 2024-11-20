import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateInvestment } from "../../@types/type";
import useAuthToken from "../../hooks/useAuthToken";
import { adminCreteInvestment } from "../../core/investments.core";
import { InnerLayout } from "../../components/layout/inner.layout";
import CustomInputField from "../../components/customInputField.comp";
import { Button } from "../../components/button.comp";
import { LoadingIcon } from "../../icons/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

type State = "init" | "mutating" | "error" | "success";

const CreateInvestment: FC = () => {
  const methods = useForm<ICreateInvestment>({
    defaultValues: {
      name: "",
      description: "",
      minimumAmount: 0,
      interestRate: 0,
      durationInMonths: 0,
    },
  });

  const [currentState, setCurrentState] = useState<State>("init");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { token } = useAuthToken();

  const createMutation = useMutation({
    mutationFn: async (data: ICreateInvestment) =>
      adminCreteInvestment(data, token as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      toast.success("Investment created successfully!");
      setCurrentState("success");
      navigate("/investments"); 
    },
    onMutate: () => {
      setCurrentState("mutating");
    },
    onError: (error: any) => {
      if (error?.response) {
        const message = error.response.data?.error;
        toast.error(message || "An error occurred");
      }
      setCurrentState("error");
    },
  });

  const handleSubmit = (data: ICreateInvestment) => {
    createMutation.mutate(data);
  };

  return (
    <div className="lg:px-10">
      <InnerLayout
        heading="Investment"
        section="investment"
        page="create plan"
        url="/students/list"
      >
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="bg-background gap-y-8 p-1 rounded-md shadow-shadow2 pb-8 "
        >
          <div className="px-3 mt-8 md:px-6 px:ml-6">
            <h3 className="font-semibold text-xl">Create Investment Plan</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2 lg:grid-cols-3 gap-y-12 p-1 mt-8 px-3 md:px-8 lg:px-8 ">
            <CustomInputField
              methods={methods}
              fieldName="name"
              label="Name"
              placeholder="E.g Investment Name"
              errorMsg="Investment name is required"
              type="text"
            />
            <CustomInputField
              methods={methods}
              fieldName="description"
              label="Description"
              placeholder="E.g Short description"
              errorMsg="Description is required"
              type="text"
            />
            <CustomInputField
              methods={methods}
              fieldName="minimumAmount"
              label="Minimum Amount"
              placeholder="E.g 3000"
              errorMsg="Minimum amount is required"
              type="number"
              rules={{
                required: "Minimum amount is required",
                min: { value: 1, message: "Minimum amount must be greater than 0" },
              }}
            />
            <CustomInputField
              methods={methods}
              fieldName="interestRate"
              label="Interest Rate"
              placeholder="E.g 5"
              errorMsg="Interest rate is required"
              type="number"
              rules={{
                required: "Interest rate is required",
                min: { value: 0.1, message: "Interest rate must be greater than 0" },
              }}
            />
            <CustomInputField
              methods={methods}
              fieldName="durationInMonths"
              label="Duration in Months"
              placeholder="E.g 12"
              errorMsg="Duration is required"
              type="number"
              rules={{
                required: "Duration is required",
                min: { value: 1, message: "Duration must be at least 1 month" },
              }}
            />
          </div>
          <div className="ml-3 mt-6 md:ml-8 lg:ml-8">
            <Button
              type="submit"
              className="px-8 rounded-md"
              disabled={currentState === "mutating"}
            >
              {currentState === "mutating" ? (
                <LoadingIcon className="w-6 h-6 text-white" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </InnerLayout>
    </div>
  );
};

export default CreateInvestment;
