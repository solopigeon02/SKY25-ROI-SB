import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import { fetchPeople } from "../utils/api";

export default function PeopleViewScreen(props) {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = fetchPeople();
      setPeople(data);
    };

    fetchData();
  }, []);

  if (!people) {
    return <Text>loading...</Text>;
  } else {
      return (<Text>{people[0].name}</Text>)
  }

let a = [1,2,3,4];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cf2a3d",
      }}
    >
      {a.map((person) => (
        <View>
          <Text>sam</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
