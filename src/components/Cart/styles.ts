import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-between;
`;
export const Slogan = styled.Text`
  flex: 1;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.italic};
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`;
export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;
export const NotificationCart = styled.Text`
  font-size: ${RFValue(12)}px;
  color: black;
  margin-left: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 20px;
`;
export const ModalLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;
export const CloseBtn = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 0px;
`;