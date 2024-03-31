import { Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { getSuffixFromStack } from "../../utils";

export class DataStack extends Stack {

    public readonly postsTable: ITable;

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const suffix = getSuffixFromStack(this)
        
        this.postsTable = new Table(this, 'SlapprPostsTable', {
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `SlapprStack-${suffix}`
        })
    }
}
