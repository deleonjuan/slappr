import {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { sortBy } from "lodash";

export async function getPosts(
  event: APIGatewayProxyEvent,
  dbbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  if (event.queryStringParameters) {
    if ("id" in event.queryStringParameters) {
      const userId = event.queryStringParameters["id"];
      const postsFromUser = await dbbClient.send(
        new GetItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: { S: userId },
          },
        })
      );

      if (!postsFromUser.Item) {
        return {
          statusCode: 404,
          body: JSON.stringify(`id ${userId} not found`),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(unmarshall(postsFromUser.Item)),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify("Id required"),
      };
    }
  }

  const yesterday = new Date(
    new Date().getTime() - 24 * 60 * 60 * 1000
  ).getTime();

  const postsList = await dbbClient.send(
    new ScanCommand({
      TableName: process.env.TABLE_NAME,
      Limit: 10,
      ScanFilter: {
        createdAt: {
          AttributeValueList: [{ N: yesterday.toString() }],
          ComparisonOperator: "GT",
        },
      },
    })
  );

  const unmarshalledItems = postsList.Items.map((post) => unmarshall(post));
  const sortedElements = sortBy(unmarshalledItems, ['createdAt']).reverse();
  return {
    statusCode: 201,
    body: JSON.stringify(sortedElements),
  };
}
