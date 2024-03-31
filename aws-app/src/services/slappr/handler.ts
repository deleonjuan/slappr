import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { getPosts } from "./get";
import { postUpdate } from "./post";

const dbbClient = new DynamoDBClient({});

async function handler(event: APIGatewayProxyEvent, context: Context) {
  try {
    switch (event.httpMethod) {
      case "GET":
        const getRes = getPosts(event, dbbClient);
        return getRes;
      case "POST":
        const postRes = postUpdate(event, dbbClient);
        return postRes;
      default:
        return {
          statusCode: 500,
          body: JSON.stringify("Hello :P"),
        };
    }
  } catch (error) {
    console.log("🚀 ~ handler ~ error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
}

export { handler };
