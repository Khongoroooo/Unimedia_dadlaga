import Count from "@/components/Count";
import Name from "@/components/Name";
import Secret from "@/components/Secret";
import ToggleMessage from "@/components/ToggleMessage";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";

export default function Index() {
  const [myname, setMyname] = useState('');
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
      <Count />
      <Name name={myname} setName={setMyname} />
      <Secret secret="12345" title="Нууцыг харуулах/нуух" />
      <ToggleMessage/>

    </SafeAreaView>
  );
}
