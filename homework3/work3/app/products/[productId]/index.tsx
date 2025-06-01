import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetail() {
  const { productId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Барааны ID: {productId}</Text>
      <Link href="/">Go to home</Link>
    </View>
  );
}
