import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="One" />
      <Tabs.Screen name="two" />
    </Tabs>
  );
};
