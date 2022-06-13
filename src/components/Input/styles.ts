import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: #ffffff;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  /* background-color: #f4f5f6; */
  background-color: #ffffff;
  color: #171924;
  padding: 16px 24px;
  border: 1px solid #ccd3e2;
  margin-bottom: 16px;
  border-radius: 8px;
  font-size: 16px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #296af7;
    `};
`;
