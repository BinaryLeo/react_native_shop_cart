import { useState } from "react";
import { 
  Modal,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView
  } from "react-native";

import { useSelector } from "react-redux";
import { cardStateData } from "../../store/modules/cart/reducer";

import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/modules/cart/reducer';
//todo: check about duplication imports

import {
  Container,
  Slogan,
  Wrapper,
  NotificationCart,
  CloseBtn,
  ModalLabel,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { Button } from "../Button";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(cardStateData);


  const dispatch = useDispatch();
  const removeCartItemShop = (index: number) => {
    dispatch(removeCartItem(index));
  }
  return (
    <Container>
      <Modal
        animationType="slide"
        visible={isOpen}
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <CloseBtn>
              <Feather
                name="x-square"
                size={20}
                color="#111729"
                onPress={() => setIsOpen(false)}
              />
            </CloseBtn>
            <ModalLabel>Binary Cart</ModalLabel>
            <Text style={{ marginTop: 10 }}>
              You have {cart.length} items{" "}
              <Text style={{ color: "red", fontWeight: "600" }}>BUY NOW</Text>
            </Text>
            {cart.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: "100%", height: "80%", marginTop: 10 }}
              >
                {cart.map((item, index) => (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                    key={item.id}
                  >
                    <View style={{ marginTop: 50 }}>
                      <Text>{item.name}</Text>
                      <Text>{item.brand}</Text>
                    </View>

                    <Image
                      style={{
                        height: 150,
                        width: 150,
                        top: 2,
                        left: 0,
                        right: 0,
                      }}
                      source={{ uri: item.image }}
                    />
                    <View style={{marginTop: 20 }}>
                    <Button title=" Remove item"
                    icon="delete"
                    onPress={() => removeCartItemShop(index)}
                    >

                    </Button>
                    </View>
                  
                  </View>
                ))}
              </ScrollView>
            ) : (
              <View>
                <Text>No items</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

      <Slogan>Your Best choice for Mobile Devices</Slogan>
      <Wrapper onPress={() => setIsOpen(true)}>
        <Feather name="shopping-cart" size={16} />
        <NotificationCart>{cart?.length}</NotificationCart>
      </Wrapper>
    </Container>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});
