import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { UseFormReturn, RegisterOptions } from "react-hook-form";

interface TextAreaProps {
  fieldName: string;
  placeholder: string;
  label: string;
  methods: UseFormReturn<any, any>;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMsg?: string;
  rules?: RegisterOptions;
  className?: string;
  isDisabled?: boolean;
  rows?: number; 
}

const CustomTextAreaField: React.FC<TextAreaProps> = ({
  label,
  methods,
  fieldName,
  errorMsg,
  placeholder,
  rules,
  className,
  isDisabled = false,
  rows = 3, // Default rows for textarea
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      <textarea
        rows={rows}
        value={methods.watch(fieldName)}
        disabled={isDisabled}
        {...methods.register(fieldName, {
          required: errorMsg,
          ...rules, // Merge the validation rules
        })}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`${className} block w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-0 focus:border-blue-500 transition-all peer`}
      />
      <label
        className={`absolute left-4 px-1 bg-white transition-all duration-300 ${
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
        render={({ message }: { message: string }) => (
          <div className="text-red-500">{message}</div>
        )}
      />
    </div>
  );
};

export default CustomTextAreaField;
