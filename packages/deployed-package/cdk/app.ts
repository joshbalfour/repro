#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { createStack } from './stack'

const app = new cdk.App()
createStack(app)
