import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
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
      Item: marshall({
        id: randomId,
        userId: item.userId,
        username: item.username,
        message: item.message,
        mood: item.mood,
        emoji: item.emoji,
        createdAt: Date.now(),
      }),
    })
  );

  return {
    statusCode: 201,
    body: JSON.stringify({ data: res }),
  };
}
