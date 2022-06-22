import { ControlledInput } from "../ControlledInput";
import { Container, Box } from "./styles";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "react-native";

type FormData = {
  fullName: string;
  userName: string;
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function handleUserRegister(data: FormData) {
    console.log(data);
    Alert.alert("Register");
  }

  return (
    <>
      <Container>
        <Box>
          <ControlledInput
            name="fullName"
            control={control}
            placeholder="Full name"
            error={errors.fullName}
          />
          <ControlledInput
            name="userName"
            control={control}
            placeholder="Username"
            error={errors.userName}
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            error={errors.password}
          />
          <ControlledInput
            name="confirmPassword"
            control={control}
            placeholder="Confirm Password"
            secureTextEntry
            error={errors.confirmPassword}
          />
        </Box>
        <Button title="Register" onPress={handleSubmit(handleUserRegister)} />
      </Container>
    </>
  );
}
