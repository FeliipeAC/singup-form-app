import { Input } from "../Input";
import { Container, Box } from "./styles";
import { Button } from "../Button";

export function Form() {
  function handleUserRegister() {}

  return (
    <>
      <Container>
        <Box>
          <Input placeholder="Full name" />
          <Input placeholder="Username" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Confirm Password" secureTextEntry />
        </Box>
        <Button title="Register" onPress={handleUserRegister} />
      </Container>
    </>
  );
}
