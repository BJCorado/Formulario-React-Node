import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    favoriteSport: "",
    gender: "",
    state: "",
    isAdult: false,
    cars: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "cars") {
      const updatedCars = checked
        ? [...formData.cars, value]
        : formData.cars.filter((car) => car !== value);
      setFormData({ ...formData, cars: updatedCars });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

const [message, setMessage] = useState("");
const [showMessage, setShowMessage] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

    //Validación de campos obligatorios
  if (
    formData.firstName.trim() === "" ||
    formData.lastName.trim() === "" ||
    formData.favoriteSport === "" ||
    formData.gender === "" ||
    formData.state === ""
  ) {
    setMessage("⚠️ Por favor, complete todos los campos obligatorios.");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
    return;
  }

  try {
    await axios.post("http://localhost:5000/save", formData);
    setMessage("Datos guardados correctamente.");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  } catch (error) {
    console.error("Error:", error);
    setMessage("Error al guardar los datos.");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  }
};


  return (
    <div className="container">
      <h1>Update Information</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre*:</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} />

        <label>Apellido *:</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} />

        <label>Deporte Favorito*:</label>
        <select name="favoriteSport" value={formData.favoriteSport} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Basketball">Basketball</option>
          <option value="Fútbol">Fútbol</option>
          <option value="Tenis">Tenis</option>
        </select>

        <label>Género*:</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="Masculino" onChange={handleChange} /> Masculino</label>
          <label><input type="radio" name="gender" value="Femenino" onChange={handleChange} /> Femenino</label>
          <label><input type="radio" name="gender" value="No estoy seguro" onChange={handleChange} /> No Estoy Seguro</label>
        </div>

        <label>Estado De Residencia*:</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Kansas">Kansas</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
        </select>

        <label>
          <input type="checkbox" name="isAdult" checked={formData.isAdult} onChange={handleChange} />
          21 or older
        </label>

        <label>Modelo de Autos:</label>
        <div className="checkbox-group">
          {["Ford", "Chrysler", "Toyota", "Nissan"].map((car) => (
            <label key={car}>
              <input type="checkbox" name="cars" value={car} onChange={handleChange} />
              {car}
            </label>
          ))}
        </div>

        <button type="submit">Guardar Cambios</button>
      </form>
      {showMessage && (
  <div className="success-message">
    {message}
  </div>
)}

    </div>
  );
}

export default App;
