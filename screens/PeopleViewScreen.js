import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { fetchPeople } from "../utils/api";
import { Surface, Text, IconButton, Avatar } from "react-native-paper";
import { ScrollView } from "react-native-web";

export default function PeopleViewScreen(props) {
  const [people, setPeople] = useState([]);
  const [offline, setOffline] = useState(false);

  async function fetchData() {
    try {
      const data = await fetchPeople(setOffline);
      setPeople(data);
    } catch (err) {
      console.error(err);
      setOffline(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function showAddPerson() {
    props.navigation.navigate("PersonEdit", { id: -1 });
  }
  function showEditPerson(id) {
    props.navigation.navigate("PersonEdit", { id: id });
  }
  function showViewPerson(id) {
    props.navigation.navigate("PersonView", { id: id });
  }

  return (
    <Surface style={{ flex: 1, padding: 16 }} mode="flat" elevation={1}>
      <Text
        variant="headlineLarge"
        style={{ marginHorizontal: 10, marginBottom: 24, fontWeight: "bold" }}
      >
        Staff Directory
      </Text>
      <ScrollView>
        {people.map((person) => (
          <View
            key={person.id}
            style={{
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 10,
              marginTop: 10,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            {/* Avatar */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <TouchableOpacity onPress={() => showViewPerson(person.id)}>
                <Avatar.Icon size={48} icon="folder-open-outline" />
              </TouchableOpacity>
            </View>
            {/* Main Content */}
            <View style={{ flex: 1, marginLeft: 10, padding: 10 }}>
              <Text variant="titleMedium">{person.name}</Text>
              <Text variant="titleMedium">{person.Department.name}</Text>
              <Text variant="titleMedium">{person.phone}</Text>
            </View>
            {/* Action Buttons */}
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    icon="pencil"
                    mode="contained"
                    size={24}
                    onPress={() => showEditPerson(person.id)}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <IconButton
                    icon="delete"
                    mode="contained"
                    size={24}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({});
