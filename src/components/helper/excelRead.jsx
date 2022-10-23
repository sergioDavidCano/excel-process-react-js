import * as XLSX from "xlsx";
//Validar extencion que sea excel
const extensionRequired = (f) => {
  const extension_required = [".xlsx"];
  let ultime_punto = f.name.lastIndexOf(".");
  var extension = f.name.slice(ultime_punto, f.name.length);
  if (extension_required.indexOf(extension) === -1) {
    return false;
  } else {
    return true;
  };
};
//Function para procesar un excel
export const ExcelReadFunction = async (f) => {
  return new Promise((resolve, reject) => {
    if (f) {
      if (extensionRequired(f)) {
        let reader = new FileReader();
        reader.onload = async function (e) {
          let dataExcel = [];
          let data = new Uint8Array(e.target.result);
          let workbook = XLSX.read(data, { type: "array" });
          for (let i = 0; i < workbook.SheetNames.length; i++) {
            let worksheet = workbook.Sheets[workbook.SheetNames[i]];
            let sheet = XLSX.utils.sheet_to_json(worksheet, { sheetStubs: true, nullError: true });
            dataExcel.push({
              nameExcel: workbook.SheetNames[i],
              data: sheet,
            });
          }
          resolve(dataExcel);
        }.bind(this);
        reader.readAsArrayBuffer(f);
      } else {
        reject("extension_invalided");
        return;
      }
    } else {
      reject("not_archive");
      return;
    }
  });
};
