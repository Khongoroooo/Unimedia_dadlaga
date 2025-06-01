import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";



export default function ToggleMessage() {
  const [showSecret, setShowSecret] = useState(false);

  const toggleMessage = () => {
    setShowSecret((x) => !x);
  };
  return (
    <View>
      <Text>
        {showSecret
          ? "Энэ бол нууц"
          : "Нууцыг харахын тулд товчлуур дээр дарна уу"}
      </Text>
      <CustomButton title={showSecret?"Нууцлах":"Нууцыг ил болгох"} onPress={toggleMessage} />
    </View>
  );
}
