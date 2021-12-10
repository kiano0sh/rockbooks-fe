import { FC, HTMLInputTypeAttribute } from "react";

type InputTypes = Exclude<
  HTMLInputTypeAttribute,
  "checkbox" | "checkbox" | "radio" | "submit" | "button"
>;

interface ITextInput {
  type: InputTypes;
  onChange: () => void;
  labelTitle: string;
  inputId: string;
  error?: string;
}

const TextInput: FC<ITextInput> = ({ type, onChange, error, labelTitle }) => {
  return (
    <>
      <input
        type={type}
        className={`border-2 p-2 my-2 ${
          error ? "border-red-600" : ""
        } focus:border-blue-500 rounded-lg`}
        onChange={onChange}
        placeholder={labelTitle}
      />
      {error && <p className="bg-red-600">{error}</p>}
    </>
  );
};

export default TextInput;
