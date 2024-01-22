// src/config/awsConfig.js
const AWS = require('aws-sdk');

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'development') {
  AWS.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'fakeMyKeyId', // these keys can be anything
    secretAccessKey: 'fakeSecretAccessKey', // these keys can be anything
  });
}

// Add more configurations or conditions if needed

module.exports = AWS;
