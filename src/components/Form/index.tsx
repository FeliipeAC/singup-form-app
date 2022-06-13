import { Input } from "../Input";
import { Container } from "./styles";
import { Text } from "react-native";

export function Form() {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Confirme a senha" secureTextEntry />
    </Container>
  );
}
