// src/db/createUserTable.js
const { dynamodb } = require('../config/dynamodbClient');

const params = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'username', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'username', AttributeType: 'S' },
    { AttributeName: 'emailAddress', AttributeType: 'S' }, // To create a GSI for emailAddress
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  GlobalSecondaryIndexes: [
    {
      // Optional: Create a GSI on emailAddress to allow querying by email
      IndexName: 'EmailIndex',
      KeySchema: [{ AttributeName: 'emailAddress', KeyType: 'HASH' }],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  ],
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to create table. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      'Created table. Table description JSON:',
      JSON.stringify(data, null, 2)
    );
  }
});
