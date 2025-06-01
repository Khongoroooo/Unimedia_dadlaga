import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home.page</Text>

      <Button title="go to about" onPress={() => router.navigate("/about")} />
      <Button title="Product 1" onPress={()=> router.push("/products/1")}></Button>
      <Button title="Product 2" onPress={()=> router.push("/products/2")}></Button>
      <Button title="Product 3" onPress={()=> router.push("/products/3")}></Button>

    </View>
  );
}
