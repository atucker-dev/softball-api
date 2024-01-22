// src/config/dynamodbClient.js
const AWS = require('./awsConfig');

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = { dynamodb, docClient };
