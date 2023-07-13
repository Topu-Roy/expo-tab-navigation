import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const One = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>One</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default One;
