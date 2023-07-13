import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-800">
      <Text className="text-stone-400 text-4xl font-bold">Hello There</Text>
      <Link href="/tabs" className="px-4 pt-2 bg-indigo-700 rounded-md">
        Go To Tabs View
      </Link>
    </View>
  );
}
