import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MyStage } from "./lambda-stack";

export class GithubPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new cdk.pipelines.CodePipeline(this, "Pipeline", {
      synth: new cdk.pipelines.ShellStep("SynthStep", {
        input: cdk.pipelines.CodePipelineSource.connection(
          "ramirokrupoviesa/demo-cf-github",
          "main",
          {
            connectionArn:
              "arn:aws:codeconnections:us-east-1:058472766567:connection/253e48e0-1d98-43a0-8f72-8fa2e0f13072",
          }
        ),
        commands: ["npm ci", "npx cdk synth"],
      }),
    });

    // const devStage = new MyStage(this, "Dev");
    // pipeline.addStage(devStage);

    // const prodStage = new MyStage(this, "Prod");
    // pipeline
    //   .addStage(prodStage)
    //   .addPre(new cdk.pipelines.ManualApprovalStep("Approve"));
  }
}
