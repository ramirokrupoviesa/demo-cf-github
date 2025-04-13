#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GithubSlideStack } from '../lib/github-slide-stack';

const app = new cdk.App();
new GithubSlideStack(app, 'GithubSlideStack');
