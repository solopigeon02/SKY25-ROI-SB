import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Surface, Divider, Text, Button } from "react-native-paper";
import { fetchPersonById } from "../utils/api";
import PeopleViewScreen from "./PeopleViewScreen";

export default function PersonViewScreen(props) {
  const { id } = props.route.params;

  const [person, setPerson] = useState(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const data = await fetchPersonById(id, setOffline);
        setPerson(data);
      } catch (err) {
        console.error(err);
        setOffline(true);
      }
    };
    fetchPerson();
  }, []);

  function showPeopleView() {
    props.navigation.navigate("PeopleView");
  }

  if (!person) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <Surface
      elevate={1}
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Text
        variant="headlineLarge"
        style={{ marginHorizontal: 10, marginButton: 24, fontWeight: "bold" }}
      >
        {person.name}
      </Text>
      <Divider style={{ marginVertical: 16 }} />

      {[
        { label: "Phone:", value: person.phone },
        { label: "Street:", value: person.street },
        { label: "City:", value: person.city },
        { label: "State:", value: person.state },
        { label: "Zip:", value: person.zip },
        { label: "Country:", value: person.country },
        { label: "Department:", value: person.Department?.name },
      ].map(({ label, value }, index) => (
        <View >
          <Text>{label}</Text>
          <Text>{value}</Text>
        </View>
      ))}

      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          icon="keyboard-return"
          onPress={showPeopleView}
          style={{
            width: "100%",
          }}
        >
          Return
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({});
