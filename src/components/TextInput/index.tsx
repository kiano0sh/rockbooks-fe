import { FC, HTMLInputTypeAttribute } from 'react'

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

const TextInput: FC<ITextInput> = ({
  type,
  onChange,
  error,
  labelTitle,
  inputId,
}) => {
  return (
    <>
      <label htmlFor={inputId}>{labelTitle}</label>
      <input
        type={type}
        className={`border-2  p-2 ${
          error ? "border-red-600" : "border-blue-500"
        }`}
        onChange={onChange}
      />
      {error && <p className="bg-red-600">{error}</p>}
    </>
  );
};

export default TextInput;
