import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Container } from "./styles";
import { Form } from "../../components/Form";
import { Text } from "react-native";

export function SignUp() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Text>SignUp</Text>
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
