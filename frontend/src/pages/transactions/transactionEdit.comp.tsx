import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Transaction } from "../../@types/type";
import useAuthToken from "../../hooks/useAuthToken";
import useLogout from "../../hooks/useLogout";
import {  updateTransaction } from "../../core/investments.core";
import LoadingPage from "../../components/loader.comp";
import ErrorScreen from "../../components/errorPage";
import { InnerLayout } from "../../components/layout/inner.layout";
import CustomInputField from "../../components/customInputField.comp";
import CustomSelectField from "../../components/customSelectField";
import { LoadingIcon } from "../../icons/icons";
import { Button } from "../../components/button.comp";
import { findTransaction } from "../../core/transaction.core";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}


type State = "init" | "mutating" | "error";

const TransactionEdit: FC = () => {
  const methods = useForm<Transaction>();
  const [currentState, setCurrentState] = useState<State>("init");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { txId } = useParams();
  const [statusOptions, setStatusOptions] = useState([
    { label: "APPROVE", value: "approve" },
    { label: "REJECT", value: "reject" },
  ]);
  const { token } = useAuthToken();
  const logout = useLogout();
  if (!token) {
    logout("authToken");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    methods.setValue(name as keyof Transaction, value);
  };

  const { isError, isLoading, isSuccess, data } = useQuery({
    queryKey: ["transaction", txId],
    queryFn: () => findTransaction(txId as string,token as string),
  });

  useEffect(() => {
    if (isSuccess && data) {
      const tx:any = data.payload;
      setStatusOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.value.toLowerCase() === tx.status.toLowerCase()
            ? { label: tx.status, value: tx.status }
            : option
        )
      );
      methods.setValue("wallet", tx.wallet);
      methods.setValue("amount", tx.amount);
      methods.setValue("type", tx.type);
      methods.setValue("status", tx.status);
      methods.setValue("name", `${tx.user.first_name}  ${tx.user.last_name}`);
      methods.setValue("email", tx.user.email);

    }
  }, [isSuccess, data, methods]);

  const createMutation = useMutation({
    mutationFn: async (data: {status:string}) =>
      updateTransaction(data.status, txId as string, token as string),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      toast.success(res.payload);
      navigate("/admin/transactions")
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

  const handleSubmit = (data: Transaction) => {
    createMutation.mutate({status:data.status});
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
  if (isSuccess) {
    console.log(data);
  }
  return (
    <InnerLayout
      heading="Edit Transaction Record"
      section="Transaction"
      page="Transaction Management"
      url="/"
    >
      <div>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="bg-background gap-y-8 p-1 rounded-lg px-3 pb-6 md:px-8 lg:px-8"
        >
          <div className="ml-3 mt-8  flex justify-between   md:flex-row gap-y-6 md:gap-y-0  ">
            <h3 className="font-semibold text-2xl">Transaction Information</h3>
          
          </div>
          <div className="grid grid-cols-1   gap-x-3 md:grid-cols-2 lg:grid-cols-3 gap-y-8 p-1 mt-8 ">
            <CustomInputField
              methods={methods}
              fieldName="name"
              label=" Full Name"
              placeholder="E.g Mark Bean"
              errorMsg="First name is required"
              isDisabled={true}

              handleChange={handleChange}
            />
            <CustomInputField
              methods={methods}
              fieldName="type"
              label="Transaction Type"
              placeholder="E.g Bell"
              errorMsg="TX Type  is required"
              isDisabled={true}
              handleChange={handleChange}
            />
            <CustomInputField
              methods={methods}
              fieldName="amount"
              label="Amount"
              placeholder="E.g 3000"
              errorMsg="Amount is required"
              isDisabled={true}

              handleChange={handleChange}
            />
            <CustomInputField
              methods={methods}
              fieldName="email"
              label="Email"
              placeholder="E.g example@gmail.com"
              errorMsg="Email is required"
              handleChange={handleChange}
              isDisabled={true}

              type="email"
            />
            <CustomSelectField
              methods={methods}
              fieldName="status"
              label="Status"
              options={statusOptions}
              errorMsg="Status is required"
            />
        
          
          </div>
          <div className="ml-3 mt-6 md:ml-8 lg:ml-8">
            <Button type="submit" disabled={currentState === "mutating"}>
              {currentState === "mutating" ? (
                <LoadingIcon className="w-6 h-6 text-white" />
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </form>
      </div>
    </InnerLayout>
  );
};

interface SwitchToggleProps {
  id: string;
  verified: boolean;
}


export default TransactionEdit;
