import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda_nodejs.NodejsFunction(this, "Fn", {
      entry: "lambda.index.ts",
    });
  }
}

export class MyStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    new LambdaStack(this, "LambdaStack");
  }
}
