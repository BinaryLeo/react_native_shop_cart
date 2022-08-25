import { View, Text, Image, FlatList } from "react-native";
import { products } from "../../constants";
import 'intl';
import 'intl/locale-data/jsonp/en';
import {Container,ListContainer,Wrapper,CardProduct} from './styles'
export const Shop = () => {
  return (
    <Container>
      <Text>Binary Store</Text>
      <ListContainer>
      <Wrapper>
     
      <FlatList
      data={products}
      keyExtractor = {(item:any)=>item.id}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({item})=>(
          <CardProduct>
          <Image source={{ uri: item.image }} />
          <Text>{item.name}</Text>
          <Text>{item.brand}</Text>
          <Text>{Intl.NumberFormat('en-US',{
            style:'currency',
            currency:'USD'
          }).format(item.price)}</Text>
          
        </CardProduct>
      )}
      />
      </Wrapper>
      </ListContainer>
      <Text>sssss</Text>
    </Container>
  );
};
