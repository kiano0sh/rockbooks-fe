import Button from "components/Button";
import Card from "components/Card";
import TextInput from "components/TextInput";
import { FC } from "react";
import { useNavigate } from "react-router";
import { AuthRoutePaths } from "routes";

const Login: FC = () => {
  const navigate = useNavigate();

  const onSubmit = () => {};
  const onLoginButtonClicked = () => {
    navigate(AuthRoutePaths.login);
  };

  return (
    <Card className="w-96">
      <TextInput
        name={"displayName"}
        type="text"
        placeholder="نام یا لقب شما"
        error={""}
        className="my-2 w-full"
      />
      <TextInput
        name={"email"}
        type="email"
        placeholder="ایمیل"
        error={""}
        className="my-2 w-full"
      />
      <TextInput
        name={"password"}
        type="password"
        placeholder="رمز عبور"
        error={""}
        className="my-2 w-full"
      />
      <Button
        className="mt-2"
        kind="positive"
        type="submit"
        name="ثبت نام"
        onClick={onSubmit}
      />
      <Button
        className="mt-6"
        kind="ghost"
        name="ورود"
        onClick={onLoginButtonClicked}
      />
    </Card>
  );
};

export default Login;
