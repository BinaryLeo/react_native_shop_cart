import { View, Text, Image, FlatList } from "react-native";
import { products } from "../../constants";
import "intl";
import "intl/locale-data/jsonp/en";
import {
  Container,
  ListContainer,
  Wrapper,
  CardProduct,
  ImageContainer,
  Content,
  Title,
  Brand,
  Price,
} from "./styles";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
export const Shop = () => {
  return (
    <Container>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "600" }}>
        Binary Store
      </Text>
      <ListContainer>
        <Wrapper>
          <Cart />
          <View style={{ marginTop: 15 }}>
            <FlatList
              data={products}
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item }) => (
                <CardProduct>
                  <ImageContainer>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        top: 20,
                        left: 0,
                        right: 0,
                      }}
                      source={{ uri: item.image }}
                    />
                  </ImageContainer>
                  <Content>
                    <Title>{item.name}</Title>
                    <Brand>{item.brand}</Brand>
                    <Price>
                      {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}
                    </Price>

                    <Button
                      title="Add cart"
                      icon="plus-circle"
                      onPress={() => alert("Added to the cart")}
                    />
                  </Content>
                </CardProduct>
              )}
            />
          </View>
        </Wrapper>
      </ListContainer>
    </Container>
  );
};
