import { View, Image } from "react-native";
import { IconButton, Text, Surface, Divider } from "react-native-paper";

export default function HomeScreen(props) {
  return (
    <Surface
      elevation={1}
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        variant="headlineLarge"
        style={{
          marginBottom: 24,
          fontWeight: "bold",
        }}
      >
        Hi Sam
      </Text>
      <Divider />
      <Text
        variant="headlineLarge"
        style={{
          marginVertical: 10,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ROI Human Resource
      </Text>
      <Divider />

      <Image
        source={require("../assets/images/roi-logo.jpg")}
        resizeMode="contain"
        style={{
          width: 300,
          height: 120,
          margin: 20,
        }}
      />
    </Surface>
  );
}
