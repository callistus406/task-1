import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthToken from "../../hooks/useAuthToken";
import { ICreateInvestment, InvestmentSubscription } from "../../@types/type";
import { createSubscription } from "../../core/subscription.core";
import { InnerLayout } from "../../components/layout/inner.layout";
import CustomInputField from "../../components/customInputField.comp";
import { Button } from "../../components/button.comp";
import { LoadingIcon } from "../../icons/icons";
import {
  adminUpdateInvestment,
  findInvestment,
} from "../../core/investments.core";
import LoadingPage from "../../components/loader.comp";
import ErrorScreen from "../../components/errorPage";
import CustomTextAreaField from "../../components/customInputArea";

type State = "init" | "mutating" | "error" | "success";

const EditInvestment: FC = () => {
  const { id } = useParams();
  const methods = useForm<ICreateInvestment>({
    defaultValues: {
      minimumAmount: 0,
      interestRate: 0,
      durationInMonths: 0,
      description: "",
    },
  });

  const [currentState, setCurrentState] = useState<State>("init");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useAuthToken();

  const { isError, isFetched,isSuccess, isPending, data } = useQuery({
    queryKey: ["investment"],
    queryFn: () => findInvestment(id as string, token as string),
  });
  const createMutation = useMutation({
    mutationFn: async (data: ICreateInvestment) =>
      adminUpdateInvestment(data, id as string, token as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      toast.success("Investment updated successfully!");
      setCurrentState("success");
      navigate("/admin/investments");
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
    const formattedData: ICreateInvestment = {
      ...data,
    };

    createMutation.mutate(formattedData);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const investment:any = data.payload;
    console.log(investment,"ppppppppppp")
      methods.setValue("name", investment.name);
      methods.setValue("description", investment.description);
      methods.setValue("minimumAmount", investment.minimumAmount);
      methods.setValue("interestRate", investment.interestRate);
      methods.setValue("durationInMonths", investment.durationInMonths);

    }
  }, [isSuccess, data, methods]);
  if (isPending) {
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

  if (isFetched) {
    console.log("from student list");
    console.log(data.payload);
  }

  return (
    <div className="lg:px-10">
      <InnerLayout
        heading="Update Investment"
        section="Investment"
        page="Update Investment"
        url="/admin/investments"
      >
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="bg-background gap-y-8 p-1 rounded-md shadow-shadow2 pb-8 "
        >
          <div className="px-3 mt-8 md:px-6">
            <h3 className="font-semibold text-xl">Investment Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2 lg:grid-cols-3 gap-y-12 p-1 mt-8 px-3 md:px-8 lg:px-8">
            <CustomInputField
              methods={methods}
              fieldName="name"
              label="Investment Name"
              placeholder="Enter Name"
              errorMsg="Investment name is required"
              type="text"
            />
            <CustomInputField
              methods={methods}
              fieldName="minimumAmount"
              label="Minimum Amount"
              placeholder="Enter minimumAmount"
              errorMsg="minimumAmount is required"
              type="number"
              rules={{
                required: "minimumAmount is required",
                min: {
                  value: 1,
                  message: "minimumAmount must be greater than 0",
                },
              }}
            />{" "}
            <CustomInputField
              methods={methods}
              fieldName="interestRate"
              label="Interest Rate "
              placeholder="Enter Interest Rate"
              errorMsg="interestRate is required"
              type="number"
              rules={{
                required: "interestRate is required",
                min: {
                  value: 1,
                  message: "interestRate must be greater than 0",
                },
              }}
            />
            <CustomTextAreaField
              methods={methods}
              fieldName="description"
              label="Investment Description"
              placeholder="Enter Description"
              errorMsg="Investment Description is required"
              rows={5}
                          
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

export default EditInvestment;
