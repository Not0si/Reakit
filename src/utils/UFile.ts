import XLSX from 'xlsx'

interface IObject {
  [key: string]: unknown | IObject
}

class UFile {
  static parseExcel = (excelFilePath: string): IObject => {
    // Read the Excel file
    const workbook = XLSX.readFile(excelFilePath)

    // Initialize an empty object to store Object data
    const ObjectData: IObject = {}

    // Iterate through each sheet in the Excel file
    workbook.SheetNames.forEach((sheetName) => {
      // Convert the sheet to Object
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
      // Store the Object data in the object with sheet name as key
      ObjectData[sheetName] = sheetData
    })

    return ObjectData
  }
}

export default UFile
