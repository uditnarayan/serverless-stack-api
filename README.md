# Serverless Stack Notes API

A Serverless starter that adds ES6, TypeScript, serverless-offline, linting, environment variables, and unit test support. This application provides endpoints to perform CRUD operations on `notes` resource and a `hello` resource for public testing.
### Demo

A demo version of this service is hosted on AWS - [`https://cjz96vspp7.execute-api.ap-south-1.amazonaws.com/prod/hello`](https://cjz96vspp7.execute-api.ap-south-1.amazonaws.com/prod/hello)

## Reference

Part of the [Serverless Stack](http://serverless-stack.com) guide.

[Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter) uses the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin and the [serverless-offline](https://github.com/dherault/serverless-offline) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Using ES6 or TypeScript in your handler functions**
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Lint your code with ESLint**
- **Add environment variables for your stages**
- **No need to manage Webpack or Babel configs**
