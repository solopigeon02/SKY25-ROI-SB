import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://localhost:3000/api";

async function isOnline() {
  try {
    const response = await fetch(`${API_BASE_URL}/departments`);
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function fetchDepartments() {
  return;
}
export async function fetchPeople(setOffline) {
  try {
    const online = await isOnline();
    setOffline(!online);

    if (online) {
      const response = await fetch(`${API_BASE_URL}/people`);
      if (!response.ok) throw new Error("fail to get people");
      const data = await response.json();
      await AsyncStorage.setItem("people", JSON.stringify(data));
      return data;
    } else {
      const cacheData = await AsyncStorage.getItem("people");
      if (cacheData) {
        return JSON.parse(cacheData);
      } else {
        throw new Error("No cache data found.");
      }
    }
  } catch (error) {
    console.error("Error while calling API.", error.message);
    return null;
  }
}
export async function fetchPersonById(id, setOffline) {
  try {
    const online = await isOnline();
    setOffline(!online);

    if (online) {
      const response = await fetch(`${API_BASE_URL}/people/${id}`);
      if (!response.ok) throw new Error("fail to get person");
      const data = await response.json();
      await AsyncStorage.setItem(`person_${id}`, JSON.stringify(data));
      return data;
    } else {
      const cacheData = await AsyncStorage.getItem(`person_${id}`);
      if (cacheData) {
        return JSON.parse(cacheData);
      } else {
        throw new Error(`No cache data found for person ${id}.`);
      }
    }
  } catch (error) {
    console.error(`Error while calling API for person ${id}.`, error.message);
    return null;
  }
}
export async function addPerson(personData) {}
export async function updatePerson(id, updatedData) {}
export async function deletePerson(id) {}
