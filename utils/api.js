const API_BASE_URL = "http://localhost:3000/api";

export async function fetchDepartments(){
      return
}
export async function fetchPeople() {
      
      const response = await fetch (`${API_BASE_URL}/people`);
      if (!response.ok) throw new Error("fail to get people");
      const data = await response.json();
      return data;
        
}
export async function fetchPersonById(id) {}
export async function addPerson(personData) {}
export async function updatePerson(id, updatedData) {}
export async function deletePerson(id) {}