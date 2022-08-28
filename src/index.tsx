import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import {store} from "./store";
import { Shop } from "./screen/shop";

interface Props {
  onLayout: () => void;
}
export function Startup({ onLayout }: Props) {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView onLayout={onLayout}>
          <Shop />
        </SafeAreaView>
      </Provider>
    </>
  );
}
