import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Container } from "./styles";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

export function SignUp() {
  return (
    <ScrollView>
      <Container>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {/* <KeyboardAvoidingView behavior="position" enabled> */}
        <>
          <Header />
          <Form />
        </>
        {/* </KeyboardAvoidingView> */}
        {/* </TouchableWithoutFeedback> */}
      </Container>
    </ScrollView>
  );
}
