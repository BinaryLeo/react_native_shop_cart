import {useSelector} from 'react-redux';
import {cardStateData} from '../../store/modules/cart/reducer';

import { Container,Slogan, Wrapper, NotificationCart } from "./styles";
import { Feather } from "@expo/vector-icons";

export function Cart() {
  const cart  = useSelector(cardStateData)
  //*console.log(cart)
  return (
    <Container>
      <Slogan>Your Best choice for Mobile Devices</Slogan>  
      <Wrapper onPress={() => alert("cart")}>
        <Feather name="shopping-cart" size={16} />
        <NotificationCart>{cart.length}</NotificationCart>
      </Wrapper>
    </Container>
  );
}