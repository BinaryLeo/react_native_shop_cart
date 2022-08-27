import {SafeAreaView} from 'react-native'
import { Shop } from './screen/shop';
interface Props {
   onLayout: () => void;
 }
export  function Startup({onLayout}:Props){
return(
   <SafeAreaView onLayout={onLayout}>
    <Shop/>
   </SafeAreaView>
)
};