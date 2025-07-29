const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { writeToExcel } = require("./excelWriter");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

app.post("/save", async (req, res) => {
  try {
    await writeToExcel(req.body);
    res.status(200).send("Datos guardados en Excel.");
  } catch (err) {
    res.status(500).send("Error al guardar los datos.");
  }
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const excelPath = path.join(__dirname, "Datos_Formulario.xlsx");

app.get("/descargar-excel", (req, res) => {
  res.download(excelPath, "Datos_Formulario.xlsx", (err) => {
    if (err) {
      console.error("❌ Error al enviar el archivo:", err.message);
      res.status(500).send("Error al descargar el archivo.");
    }
  });
});
