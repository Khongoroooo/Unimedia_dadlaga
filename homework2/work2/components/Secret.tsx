import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";

type ToggleMessageProps = {
  secret: string;
  title: string;
};

export default function Secret({ secret, title }: ToggleMessageProps) {
  const [showSecret, setShowSecret] = useState(false);

  const secretMessages = () => {
    setShowSecret((x) => !x);
  };
  return (
    <View>
      <Text>
        {showSecret
          ? `Нууц ${secret}`
          : "Нууцыг харахын тулд товчлуур дээр дарна уу"}
      </Text>
      <CustomButton title={title} onPress={secretMessages} />
    </View>
  );
}
