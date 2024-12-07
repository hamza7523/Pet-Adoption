import React, { useState } from "react";
import AddPetForm from "./AddPetForm";

const AdminPanel = () => {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <AddPetForm onAddPet={handleAddPet} />
      <h2>Pets List</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.PetID}>
            {`${pet.PetName}, a ${pet.PetSize} ${pet.Breed} (${pet.PetType}), Age: ${pet.Age}, Gender: ${pet.Gender}, Health: ${pet.HealthStatus}, Vaccination: ${pet.VaccinationStatus}, Status: ${pet.Availability}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
