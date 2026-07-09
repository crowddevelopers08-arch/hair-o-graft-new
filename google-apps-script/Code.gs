/**
 * Paste this into Extensions > Apps Script on the Google Sheet you want
 * submissions saved to, then deploy as a Web App (see README.md in this
 * folder). The Next.js API at app/api/submissions/route.ts POSTs each
 * form submission here as JSON.
 */

var SHEET_NAME = 'Submissions';
var DEFAULT_HEADERS = [
  'Timestamp',
  'Source',
  'Name',
  'Phone',
  'Email',
  'Concern',
  'URL',
  'TeleCRM',
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function jsonOutput_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(payload.headers || DEFAULT_HEADERS);
    }

    var row = payload.row || [
      payload.timestamp,
      payload.source,
      payload.name,
      payload.phone,
      payload.email,
      payload.concern,
      payload.pageUrl || payload.url,
      payload.telecrm,
    ];

    sheet.appendRow(row);

    return jsonOutput_({ success: true });
  } catch (err) {
    return jsonOutput_({ success: false, error: String(err) });
  }
}

/**
 * Visiting the deployed web app URL in a browser hits this. Returns all
 * saved rows as JSON — handy to confirm the deployment is wired up
 * correctly without opening the sheet.
 */
function doGet() {
  var sheet = getSheet_();
  if (sheet.getLastRow() === 0) {
    return jsonOutput_({ success: true, rows: [] });
  }
  return jsonOutput_({ success: true, rows: sheet.getDataRange().getValues() });
}
