import fs from 'fs'
import XLSX from 'xlsx'

const parseExcelToObject = (excelFilePath) => {
  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath)

  // Initialize an empty object to store Object data
  const ObjectData = {}

  // Iterate through each sheet in the Excel file
  workbook.SheetNames.forEach((sheetName) => {
    // Convert the sheet to Object
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
    // Store the Object data in the object with sheet name as key
    ObjectData[sheetName] = sheetData
  })

  return ObjectData
}

const generateJsons = (array) => {
  const langs = Object.keys(array[0]).slice(1)
  const container = {}

  array.forEach((row) => {
    langs.forEach((lang) => {
      if (!container[lang]) {
        container[lang] = {}
      }
      container[lang][row['id']] = row[lang]
    })
  })

  Object.entries(container).map(([key, value]) => {
    fs.writeFile(
      `../dictionaries/${key}.json`,
      JSON.stringify(value),
      'utf8',
      (err) => {
        if (err) {
          console.error('Error writing JSON to file:', err)
          return
        }
        console.log('JSON data has been saved to')
      },
    )
  })
}

const data = Object.entries(parseExcelToObject('dictionary.xlsx'))[0][1]
generateJsons(data)
