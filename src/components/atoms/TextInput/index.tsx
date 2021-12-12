import { HTMLInputTypeAttribute, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputTypes = Exclude<
  HTMLInputTypeAttribute,
  "checkbox" | "checkbox" | "radio" | "submit" | "button"
>;

interface ITextInput extends IClassName, Partial<UseFormRegisterReturn> {
  type: InputTypes;
  placeholder: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, ITextInput>(
  ({ type, onChange, error, placeholder, className = "", ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={`border-2 p-2 ${
            error ? "border-red-600" : ""
          } focus:border-blue-500 rounded-lg ${className}`}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
        {error && <p className="text-red-600">{error}</p>}
      </>
    );
  }
);

export default TextInput;
