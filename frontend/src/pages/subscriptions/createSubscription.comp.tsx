import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthToken from "../../hooks/useAuthToken";
import { InvestmentSubscription } from "../../@types/type";
import { createSubscription } from "../../core/subscription.core";
import { InnerLayout } from "../../components/layout/inner.layout";
import CustomInputField from "../../components/customInputField.comp";
import { Button } from "../../components/button.comp";
import { LoadingIcon } from "../../icons/icons";

type State = "init" | "mutating" | "error" | "success";

const PlanSubscription: FC = () => {
  const { subId } = useParams();
  const methods = useForm<InvestmentSubscription>({
    defaultValues: {
      investmentPlan: subId,
      amount: 0,
      startDate: "",
      endDate: "",
    },
  });

  const [currentState, setCurrentState] = useState<State>("init");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useAuthToken();

  const createMutation = useMutation({
    mutationFn: async (data: InvestmentSubscription) =>
      createSubscription(data, token as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
      toast.success("Subscription created successfully!");
      setCurrentState("success");
      navigate("/subscriptions");
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

  const handleSubmit = (data: InvestmentSubscription) => {
 
    const formattedData: InvestmentSubscription = {
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    };

    createMutation.mutate(formattedData);
  };

  return (
    <div className="lg:px-10">
      <InnerLayout
        heading="Plan Subscription"
        section="Subscription"
        page="Create Subscription"
        url="/subscriptions/list"
      >
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="bg-background gap-y-8 p-1 rounded-md shadow-shadow2 pb-8 "
        >
          <div className="px-3 mt-8 md:px-6">
            <h3 className="font-semibold text-xl">Subscription Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2 lg:grid-cols-3 gap-y-12 p-1 mt-8 px-3 md:px-8 lg:px-8">
            <CustomInputField
              methods={methods}
              fieldName="investmentPlan"
              label="Investment Plan"
              placeholder="Enter Plan ID"
              errorMsg="Investment Plan is required"
              type="text"
            />
            <CustomInputField
              methods={methods}
              fieldName="amount"
              label="Amount"
              placeholder="Enter Amount"
              errorMsg="Amount is required"
              type="number"
              rules={{
                required: "Amount is required",
                min: { value: 1, message: "Amount must be greater than 0" },
              }}
            />
            <CustomInputField
              methods={methods}
              fieldName="startDate"
              label="Start Date"
              placeholder="YYYY-MM-DD"
              errorMsg="Start Date is required"
              type="date"
              rules={{
                required: "Start Date is required",
              }}
            />
            <CustomInputField
              methods={methods}
              fieldName="endDate"
              label="End Date"
              placeholder="YYYY-MM-DD"
              errorMsg="End Date is required"
              type="date"
              rules={{
                required: "End Date is required",
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

export default PlanSubscription;
