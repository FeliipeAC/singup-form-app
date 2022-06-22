import { ControlledInput } from "../ControlledInput";
import { Container, Box } from "./styles";
import { Button } from "../Button";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Form() {
  const { control, handleSubmit } = useForm<FormData>();
  function handleUserRegister(data: FormData) {}

  return (
    <>
      <Container>
        <Box>
          <ControlledInput
            name="fullName"
            control={control}
            placeholder="Full name"
          />
          <ControlledInput
            name="username"
            control={control}
            placeholder="Username"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
          />
          <ControlledInput
            name="confirmPassword"
            control={control}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </Box>
        <Button title="Register" onPress={handleSubmit(handleUserRegister)} />
      </Container>
    </>
  );
}
