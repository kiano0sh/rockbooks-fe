import Button from "components/Button";
import Card from "components/Card";
import TextInput from "components/TextInput";
import { FC } from "react";
import { useNavigate } from "react-router";
import { AuthRoutePaths } from "routes";

const Login: FC = () => {
  const navigate = useNavigate();

  const onEmailChange = () => {};
  const onPasswordChange = () => {};
  const onSubmit = () => {};
  const onRegisterButtonClicked = () => {
    navigate(AuthRoutePaths.register);
  };

  return (
    <Card className="w-96">
      <TextInput
        type="email"
        onChange={onEmailChange}
        inputId="email"
        labelTitle="ایمیل"
        error={""}
        className="my-2 w-full"
      />
      <TextInput
        type="password"
        onChange={onPasswordChange}
        inputId="password"
        labelTitle="رمز عبور"
        error={""}
        className="my-2 w-full"
      />
      <Button className="mt-2" type="positive" name="ورود" onClick={onSubmit} />
      <Button
        className="mt-6"
        type="ghost"
        name="ثبت نام"
        onClick={onRegisterButtonClicked}
      />
    </Card>
  );
};

export default Login;
