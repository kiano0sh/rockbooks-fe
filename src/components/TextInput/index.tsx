import { FC, HTMLInputTypeAttribute } from "react";

type InputTypes = Exclude<
  HTMLInputTypeAttribute,
  "checkbox" | "checkbox" | "radio" | "submit" | "button"
>;

interface ITextInput extends IClassName {
  type: InputTypes;
  onChange: () => void;
  labelTitle: string;
  inputId: string;
  error?: string;
}

const TextInput: FC<ITextInput> = ({
  type,
  onChange,
  error,
  labelTitle,
  className = "",
}) => {
  return (
    <>
      <input
        type={type}
        className={`border-2 p-2 ${
          error ? "border-red-600" : ""
        } focus:border-blue-500 rounded-lg ${className}`}
        onChange={onChange}
        placeholder={labelTitle}
      />
      {error && <p className="bg-red-600">{error}</p>}
    </>
  );
};

export default TextInput;
