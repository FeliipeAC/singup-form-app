import { ControlledInput } from "../ControlledInput";
import { Container, Box } from "./styles";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  userName: yup.string().required("Username is required"),
  email: yup.string().email("E-mail invalid").required("E-mail is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

export function Form() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
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
