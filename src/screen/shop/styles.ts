import styled from "styled-components/native";
//npm install --save-dev @types/styled-components-react-native

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const ListContainer = styled.View`
  width: 100%;
  height: 90%;
`;
export const Wrapper = styled.View`
  margin-top: 10px;
  padding: 0 10px;
`;
export const CardProduct = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 10px;
  width: 45%;
  height: 150px;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  justify-content: center;
 
`;
export const ImageContainer = styled.View`
flex: 1;`
export const Content = styled.View`
flex: 1;
`

export const AddBtn = styled.TouchableOpacity`
  

`