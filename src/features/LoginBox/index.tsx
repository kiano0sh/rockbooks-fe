import Button from "components/Button";
import Card from "components/Card";
import TextInput from "components/TextInput";
import { useUserLoginMutation } from "graphql/generated/graphql";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthRoutePaths } from "routes";
import {
  ErrorMessageInvalidEmail,
  ErrorMessageRequiredField,
} from "consts/errors";
import { ValidationPatternEmail } from "consts/validationPatterns";

type LoginFormData = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({ mode: "onBlur" });

  const [loginMutation, data] = useUserLoginMutation();
  // console.log(data, "a");

  const onSubmit = (data: LoginFormData) => {
    loginMutation({ variables: { input: data } });
  };
  const onRegisterButtonClicked = () => {
    navigate(AuthRoutePaths.register);
  };

  return (
    <Card className="w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <TextInput
          type="email"
          labelTitle="ایمیل"
          error={errors.email?.message}
          className="my-2 w-full"
          {...register("email", {
            required: ErrorMessageRequiredField,
            pattern: {
              value: ValidationPatternEmail,
              message: ErrorMessageInvalidEmail,
            },
          })}
        />
        <TextInput
          type="password"
          labelTitle="رمز عبور"
          error={errors.password?.message}
          className="my-2 w-full"
          {...register("password", {
            required: ErrorMessageRequiredField,
          })}
        />
        <Button
          className="mt-2"
          kind="positive"
          type="submit"
          name="ورود"
          disabled={!isValid}
        />
        <Button
          className="mt-6"
          kind="ghost"
          name="ثبت نام"
          onClick={onRegisterButtonClicked}
        />
      </form>
    </Card>
  );
};

export default Login;
