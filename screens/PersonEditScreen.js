import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Text, Surface, Button } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchPersonById } from "../utils/api";

export default function PersonEditScreen(props) {
  const { id } = props.route.params;

  const [person, setPerson] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    departmentId: null,
  });
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        if (id !== -1) {
          const data = await fetchPersonById(id, setOffline);
          setPerson(data);
        }
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
  async function handleSubmit() {}

  if (!person) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <Surface
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Text>{id === -1 ? "New Person" : person.name}</Text>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{ paddingBottom: 34 }}
      >
        <TextInput
          label="name"
          value={person.name}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, name: text });
          }}
        />
        <TextInput
          label="name"
          value={person.phone}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, phone: text });
          }}
        />
        <TextInput
          label="name"
          value={person.street}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, street: text });
          }}
        />
        <TextInput
          label="name"
          value={person.city}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, city: text });
          }}
        />
        <TextInput
          label="name"
          value={person.state}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, state: text });
          }}
        />
        <TextInput
          label="name"
          value={person.zip}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, zip: text });
          }}
        />
        <TextInput
          label="name"
          value={person.country}
          mode="outlined"
          keyboardType="numeric"
          style={{ marginBottom: 16 }}
          onChangeText={(text) => {
            setPerson({ ...person, country: text });
          }}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}
        >
          <Button
            mode="outline"
            icon="keyboard-return"
            onPress={showPeopleView}
          >
            Cancel
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}
        >
          <Button mode="contained" icon="update" onPress={handleSubmit}>
            Ok
          </Button>
        </View>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({});
