const { MessengerClient } = require('messaging-api-messenger');
var config = require('./config');
// get accessToken from facebook developers website
const client = MessengerClient.connect(config.TOKEN);