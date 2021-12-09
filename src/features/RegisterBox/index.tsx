import Button from "components/Button";
import Card from "components/Card";
import TextInput from "components/TextInput";
import { FC } from "react";

const Login: FC = () => {
  const onDisplayNameChange = () => {};
  const onEmailChange = () => {};
  const onPasswordChange = () => {};
  const onSubmit = () => {};

  return (
    <Card>
      <TextInput
        type="text"
        onChange={onDisplayNameChange}
        inputId="displayName"
        labelTitle="نام یا لقب شما"
        error={""}
      />
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
      <Button type="positive" name="ثبت نام" onClick={onSubmit} />
    </Card>
  );
};

export default Login;
