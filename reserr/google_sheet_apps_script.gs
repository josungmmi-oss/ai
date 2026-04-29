const SHEET_ID = "12iWjgzH9nAlRXDM29UYkqIggDvwk76uKAr5jpZwW1oo";
const SHEET_NAME = "sheet1";

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.category || "",
    data.time || "",
    data.message || "",
    data.agree || "",
    data.marketing || "",
    data.page || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}