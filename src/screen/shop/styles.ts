import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: #eaeaea;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const ListContainer = styled.View`
  width: 100%;
  height: 90%;
  padding: 5px;
`;
export const Wrapper = styled.View`
  margin-top: 10px;
`;
export const CardProduct = styled.View`
  background-color: #fff;
  flex-direction: column;
  margin: 10px 10px;
  width: 45%;
  height: 300px;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;
export const Brand = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;
export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: 10px;
  color: red;
`;
export const ImageContainer = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
`;

export const AddBtn = styled.TouchableOpacity``;
