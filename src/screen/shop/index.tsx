import { Button, Text, Image, FlatList } from "react-native";
import { products } from "../../constants";
import 'intl';
import 'intl/locale-data/jsonp/en';
import {Container,ListContainer,Wrapper,CardProduct,ImageContainer,Content,AddBtn} from './styles'
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
          <ImageContainer>
          <Image style={{height: 80, left: 0, right: 0}} source={{ uri: item.image }} />
          </ImageContainer>  
          <Content>
          <Text>{item.name}</Text>
          <Text>{item.brand}</Text>
          <Text>{Intl.NumberFormat('en-US',{
            style:'currency',
            currency:'USD'
          }).format(item.price)}</Text>
          <AddBtn onPress={() => alert('Added')}>
            <Text>Add</Text>
          </AddBtn>
              
          </Content>
        
        </CardProduct>
      )}
      />
      </Wrapper>
      </ListContainer>
      <Text>sssss</Text>
    </Container>
  );
};
