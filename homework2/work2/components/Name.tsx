import React from "react";
import { Text, TextInput, View } from "react-native";


export default function Name({ name, setName }) {
  return (
    <View>
      <Text>My name is {name}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
    </View>
  );
}
