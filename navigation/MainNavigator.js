import { View } from "react-native";
import { useState } from "react";
import { BottomNavigation, Text, Provider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import HelpScreen from "../screens/HelpScreen";
import PeopleNavigator from "./PeopleNavigator";
import SamScreen from "../screens/SamScreen";

export default function MainNavigator() {
  const [index, setIndex] = useState(0);
  const routes = [
    {
      key: "home",
      title: "Home",
      icon: "home",
    },
    {
      key: "people",
      title: "People",
      icon: "people",
    },
    {
      key: "help",
      title: "Help",
      icon: "help",
    },
  ];
  const renderScreen = ({ route }) => {
    switch (route.key) {
      case "home":
        return <HomeScreen />;
        break;
      case "people":
        return <SamScreen />;
        break;
      case "help":
        return <HelpScreen />;
        break;
      default:
        break;
    }
  };

  return (
    <Provider>
      {renderScreen({ route: routes[index] })}
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const newIndex = routes.findIndex((r) => {
            r.key === route.key;
          });
          if (newIndex !== -1) {
            setIndex(newIndex);
          }
        }}
        renderIcon={({ route, color }) => (
          <MaterialIcons name={route.icon} size={24} color={color} />
        )}
        getLabelText={({ route }) => route.title}
      />
    </Provider>
  );
}
