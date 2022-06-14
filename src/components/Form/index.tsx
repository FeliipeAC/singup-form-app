import { Input } from "../Input";
import { Container, Box } from "./styles";
import { Button } from "../Button";

export function Form() {
  function handleUserRegister() {}

  return (
    <>
      <Container>
        <Box>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirme a senha" secureTextEntry />
        </Box>
        <Button title="Register" onPress={handleUserRegister} />
      </Container>
    </>
  );
}
