import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class GithubSlideStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new cdk.pipelines.CodePipeline(this, "Pipeline", {
      synth: new cdk.pipelines.ShellStep("SynthStep", {
        input: cdk.pipelines.CodePipelineSource.connection(
          "demo-cf-github",
          "main",
          {
            connectionArn:
              "arn:aws:codestar-connections:us-east-1:222222222222:connection/7d2469ff-514a-4e4f-9003-5ca4a43cdc41",
          }
        ),
        commands: ["npm ci", "npx cdk synth"],
      }),
    });
  }
}
