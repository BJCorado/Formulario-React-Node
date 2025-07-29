const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

// Ruta relativa del archivo Excel
const filePath = path.join(__dirname, "Datos_Formulario.xlsx");

const COLUMNS = [
  { header: "Nombre", key: "firstName", width: 15 },
  { header: "Apellido", key: "lastName", width: 15 },
  { header: "Deporte favorito", key: "favoriteSport", width: 20 },
  { header: "Género", key: "gender", width: 15 },
  { header: "Estado", key: "state", width: 15 },
  { header: "Mayor de edad", key: "isAdult", width: 15 },
  { header: "Modelos de autos", key: "cars", width: 30 },
];

async function writeToExcel(data) {
  try {
    const workbook = new ExcelJS.Workbook();
    let worksheet;

    const exists = fs.existsSync(filePath);
    if (exists) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Datos");
    }

    if (!worksheet) {
      worksheet = workbook.addWorksheet("Datos");
      worksheet.columns = COLUMNS;

      // Estilo para encabezados
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF007ACC" },
        };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    }
    // Fila de datos
    const newRow = worksheet.addRow([
      data.firstName,
      data.lastName,
      data.favoriteSport,
      data.gender,
      data.state,
      data.isAdult ? 1 : 0,
      data.cars.join(", "),
    ]);

    // Aplicar bordes a cada celda de la nueva fila
    newRow.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    await workbook.xlsx.writeFile(filePath);
    console.log("Fila agregada correctamente");
  } catch (error) {
    console.error("Error al guardar:", error.message);
  }
}

module.exports = { writeToExcel };

