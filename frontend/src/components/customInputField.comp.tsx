import { ErrorMessage } from "@hookform/error-message";
// import ErrorMessage from "../../@types/ErrorMessage";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface InputProps {
  fieldName: string;
  placeholder: string;
  label: string;
  methods: UseFormReturn<any, any>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
  type?: string;
  pattern?: { value: RegExp; message: string };
  className?: string;
  isDisabled?: boolean;
}

const CustomInputField: React.FC<InputProps> = ({
  label,
  methods,
  fieldName,
  errorMsg,
  type,
  placeholder,
  pattern,
  className,
  isDisabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      <input
        type={type ? type : "text"}
        value={methods.watch(fieldName)}
        disabled={isDisabled}
        {...methods.register(fieldName, {
          required: errorMsg,
          pattern: pattern,
        })}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`${className} block w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-0 focus:border-blue-500 transition-all peer`}
      />
      <label
        className={` absolute left-4 px-1 bg-white transition-all duration-300
        ${
          focused
            ? "top-[-10px] text-sm text-blue-500"
            : "top-[-10px] text-sm text-gray-500"
        }`}
      >
        {label}
      </label>
      <ErrorMessage
        errors={methods.formState.errors}
        name={fieldName}
        render={({ message }: { message: any }) => (
          <div className="text-red-500">{message}</div>
        )}
      />
    </div>
  );
};

export default CustomInputField;