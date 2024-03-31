import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";

const app = new App();
const dataStack = new DataStack(app, 'SlapprDataStack')
const lambdaStack = new LambdaStack(app, 'SlapprLambdaStack', {
    slapprPostsTable: dataStack.postsTable
})
new ApiStack(app, 'SlapprApiStack', {
    lambdaIntegration: lambdaStack.lambdaIntegration
})