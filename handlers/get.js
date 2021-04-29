import handler from '../libs/handler';
import dynamoDb from '../libs/dynamodb';

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      userId: "123", // The id of the author
      noteId: event.pathParameters.id, // The id of the note from the path
      },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }
  return result.Item;
});
