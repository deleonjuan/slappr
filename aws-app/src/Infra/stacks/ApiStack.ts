import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
    lambdaIntegration: LambdaIntegration;
}

export class ApiStack extends Stack {
    constructor(scope: Construct, id: string, props: ApiStackProps) {
        super(scope, id, props)

        const api = new RestApi(this, 'SlapprApi')
        const resource = api.root.addResource("posts")
        resource.addMethod("GET", props.lambdaIntegration)
        resource.addMethod("POST", props.lambdaIntegration)
    }
}
