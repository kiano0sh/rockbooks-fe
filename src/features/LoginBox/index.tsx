import Button from "components/Button";
import Card from "components/Card";
import Form from "components/Form";
import TextInput from "components/TextInput";
import {
  ErrorMessageInvalidEmail,
  ErrorMessageRequiredField,
} from "consts/errors";
import localStorageKeys from "consts/localStorageKeys";
import { ValidationPatternEmail } from "consts/validationPatterns";
import { useUserLoginMutation } from "graphql/generated/graphql";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthRoutePaths } from "routes";

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

  const [loginMutation, result] = useUserLoginMutation();

  // set the jwt token to localStorage in case of a successful login
  useEffect(() => {
    if (result.data?.login) {
      localStorage.setItem(localStorageKeys.token, result.data?.login);
    }
  }, [result.data?.login]);

  const onSubmit = (data: LoginFormData) => {
    loginMutation({ variables: { input: data } });
  };
  const onRegisterButtonClicked = () => {
    navigate(AuthRoutePaths.register);
  };

  return (
    <Card className="w-96">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        error={result.error?.message}
      >
        <TextInput
          type="email"
          placeholder="ایمیل"
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
          placeholder="رمز عبور"
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
      </Form>
      <Button
        className="mt-6"
        kind="ghost"
        name="ثبت نام"
        onClick={onRegisterButtonClicked}
      />
    </Card>
  );
};

export default Login;
