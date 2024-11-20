import { ErrorMessage } from "@hookform/error-message";

import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface SelectProps {
  fieldName: string;
  label: string;
  options: { label: string; value: string }[];
  methods: UseFormReturn<any, any>;
  errorMsg?: string;
  isDisabled?: boolean;
}

const CustomSelectField: React.FC<SelectProps> = ({
  label,
  options,
  fieldName,
  methods,
  errorMsg,
  isDisabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      <select
        {...methods.register(fieldName, { required: errorMsg })}
        disabled={isDisabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`block w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-0 focus:border-blue-500 transition-all peer appearance-none`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-4 px-1 bg-white transition-all duration-300
          ${
            // methods.watch(fieldName)
            focused
              ? "top-[-10px] text-sm text-blue-300"
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

export default CustomSelectField;
