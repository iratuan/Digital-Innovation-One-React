import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, View, Image, ButtonContainer } from "./style";
import Principal from "../Principal";
import Perfil from "../Perfil";

const Tab = createBottomTabNavigator();

const screenOptions = (route) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Principal") {
      iconName = "home";
    } else if (route.name === "Perfil") {
      iconName = "user";
    }
    return <Feather name={iconName} size={20} color={color} />;
  },
});

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => screenOptions(route)}
      tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    >
      <Tab.Screen name="Principal" component={Principal}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
  );
}
