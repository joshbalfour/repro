import * as cdk from '@aws-cdk/core'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'

export const createStack = (scope: cdk.App) => {
  const stack = new cdk.Stack(scope, 'stack')
  new NodejsFunction(stack, 'function', {
    entry: './src/index.ts',
    handler: '',
    bundling: {
      preCompilation: true,
      nodeModules: ['@monorepo/a-package']
    },
  })
}