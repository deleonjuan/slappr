import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { v4 } from "uuid";

export async function postUpdate(
  event: APIGatewayProxyEvent,
  dbbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  const randomId = v4();
  const item = JSON.parse(event.body);

  const res = await dbbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: {
        id: { S: randomId },
        userId: { S: item.userId },
        username: { S: item.username },
        message: { S: item.message },
        mood: { S: item.mood },
        emoji: { S: item.emoji },
        createdAt: { S: Date.now().toString() },
      },
    })
  );

  return {
    statusCode: 201,
    body: JSON.stringify({ data: res }),
  };
}
