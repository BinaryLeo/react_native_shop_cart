import { Container,Slogan, Wrapper, NotificationCart } from "./styles";
import { Feather } from "@expo/vector-icons";
export function Cart() {
  return (
    <Container>
      <Slogan>Your Best choice for Mobile Devices</Slogan>  
      <Wrapper onPress={() => alert("cart")}>
        <Feather name="shopping-cart" size={16} />
        <NotificationCart>1</NotificationCart>
      </Wrapper>
    </Container>
  );
}
