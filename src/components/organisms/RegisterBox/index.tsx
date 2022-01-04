import Button from "components/atoms/Button";
import Card from "components/atoms/Card";
import Form from "components/atoms/Form";
import TextInput from "components/atoms/TextInput";
import {
  ErrorMessageInvalidEmail,
  ErrorMessageMaxLength,
  ErrorMessageRequiredField,
} from "consts/errors";
import { ValidationPatternEmail } from "consts/validationPatterns";
import { loginUser, useUserDispatch } from "context";
import { useUserRegisterMutation } from "graphql/generated/graphql";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthRoutePaths } from "routes";

type RegisterFormData = {
  displayName: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({ mode: "onBlur" });

  const [registerMutation, result] = useUserRegisterMutation();

  const userDispatch = useUserDispatch();
  userDispatch(loginUser({ accessToken: result.data?.register }));

  const onSubmit = (data: RegisterFormData) => {
    registerMutation({ variables: { input: data } });
  };

  const onLoginButtonClicked = () => {
    navigate(AuthRoutePaths.login);
  };

  return (
    <Card className="w-96">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        error={result.error?.message}
      >
        <TextInput
          type="text"
          placeholder="نام یا لقب شما"
          error={errors.displayName?.message}
          className="my-2 w-full"
          {...register("displayName", {
            required: ErrorMessageRequiredField,
            maxLength: {
              value: 128,
              message: ErrorMessageMaxLength(128),
            },
          })}
        />
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
          name="ثبت نام"
          disabled={!isValid}
        />
      </Form>
      <Button
        className="mt-6"
        kind="ghost"
        name="ورود"
        onClick={onLoginButtonClicked}
      />
    </Card>
  );
};

export default Register;
