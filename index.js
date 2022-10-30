import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import StackNavigator from "./components/StackNavigator";
import TabNavigator from "./components/TabNavigator";

export default function Index() {
  const [auth, setAuth] = useState(true);
  return (
    <NavigationContainer>
      {!auth ? <StackNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
}
