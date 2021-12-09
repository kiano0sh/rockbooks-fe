import Button from "components/Button";
import Card from "components/Card";
import TextInput from "components/TextInput";
import { FC } from "react";

const Login: FC = () => {
  const onEmailChange = () => {};
  const onPasswordChange = () => {};
  const onSubmit = () => {};

  return (
    <Card>
      <TextInput
        type="email"
        onChange={onEmailChange}
        inputId="email"
        labelTitle="ایمیل"
        error={""}
      />
      <TextInput
        type="password"
        onChange={onPasswordChange}
        inputId="password"
        labelTitle="رمز عبور"
        error={""}
      />
      <Button type="positive" name="ورود" onClick={onSubmit} />
    </Card>
  );
};

export default Login;
