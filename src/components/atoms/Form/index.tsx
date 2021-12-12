import { FC } from "react";

interface IForm
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  error?: string;
}

const Form: FC<IForm> = ({ onSubmit, error = "", className, ...props }) => {
  return (
    <>
      <form onSubmit={onSubmit} className={`w-full ${className}`} {...props} />
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </>
  );
};

export default Form;
