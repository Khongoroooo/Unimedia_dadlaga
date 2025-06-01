import { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View>
      <Text>count: {count}</Text>
      <CustomButton title="increment" onPress={increment}/>
      <CustomButton title="decrement" onPress={decrement}/>
      <CustomButton title="reset" onPress={reset}/>
    </View>
  );
}
