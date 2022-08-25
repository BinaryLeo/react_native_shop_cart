import { View, Text, Image } from "react-native";
import { products } from "../../constants";
import 'intl';
import 'intl/locale-data/jsonp/en';
import {styles}  from './styles'
export const Shop = () => {
  return (
    <View>
      <Text>Shop Leo</Text>
      {products?.map((item) => (
        <View key={item.id}>
          <Image source={{ uri: item.image }} />
          <Text>{item.name}</Text>
          <Text>{item.brand}</Text>
          <Text>{Intl.NumberFormat('en-US',{
            style:'currency',
            currency:'USD'
          }).format(item.price)}</Text>
          
        </View>
      ))}
    </View>
  );
};
