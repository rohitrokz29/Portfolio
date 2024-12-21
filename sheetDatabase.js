const { google } = require('googleapis');
require('dotenv').config();

const sheetId = `${process.env.SHEET_ID}`;
const tabName = 'Sheet1';
const range = 'A1';

async function _getGoogleSheetClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: require('./config'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const authClient = await auth.getClient();
    return google.sheets({
        version: 'v4',
        auth: authClient,
    });
}

async function _writeGoogleSheet(googleSheetClient, sheetId, tabName, range, data) {
    await googleSheetClient.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${tabName}!${range}`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            majorDimension: 'ROWS',
            values: data,
        },
    });
}

const VisitorData = async (req, res) => {
    const rowData = Object.values(req.body);
    const googleSheetClient = await _getGoogleSheetClient();
    await _writeGoogleSheet(googleSheetClient, sheetId, tabName, range, [rowData]);
    res.status(200)
}

module.exports = {
    VisitorData
}
