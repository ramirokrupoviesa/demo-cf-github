#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { GithubPipelineStack } from "../lib/github-slide-stack";

const app = new cdk.App();
new GithubPipelineStack(app, "GithubSlideStack");
