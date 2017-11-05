import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import Register from "./Register";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Im App</Text>
  </View>
);

const StackApp = StackNavigator({
  Register: { screen: Register }
});

export default StackApp;
