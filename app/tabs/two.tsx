import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const two = () => {
  const router = useRouter();
  const goHome = () => {
    router.replace("/");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black">two</Text>
      <TouchableOpacity onPress={goHome}>
        <Text>Go To Index</Text>
      </TouchableOpacity>
    </View>
  );
};

export default two;
