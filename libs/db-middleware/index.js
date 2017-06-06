const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');

let serverURL = 'http://localhost:3000/api';
let databaseURI = 'mongodb://localhost:27017/scholarshipSite';

exports.api = new ParseServer({
    databaseURI,
    appId: 'WXwypQcCELkuMpYVPeWV',
    masterKey: 'BbAzOt52pfBcl5YrRSjt',
    serverURL
});

exports.dashboard = new ParseDashboard({
    apps: [
        {
            serverURL,
            appId: 'WXwypQcCELkuMpYVPeWV',
            masterKey: 'BbAzOt52pfBcl5YrRSjt',
            appName: 'Scholarship Site',
            production: false
        }
    ],
    users: [
        {
            user: 'joe',
            pass: 'HwDZWzrp4@PDnWkH'
        },
        {
            user: 'mike',
            pass: 'rebn$qEVn269q*N%'
        }
    ],
    useEncryptedPasswords: false
});
