# 🐒🐒 GF Monkey Shelter 🐒🐒

## Description

This app shows a report of the monkeys in our shelter.

You can find a running instance [here](https://d3dh8b4wpdr1wg.cloudfront.net)

## Frameworks

- [Next.js](https://nextjs.org/docs) - The React Framework for Production
- [Serverless](https://www.serverless.com/) - Deployment to AWS
- [MochaJS](https://mochajs.org/) - Unit testing

## Local Setup

Install node modules.

```
yarn
```

Run app on localhost:3000.

```
yarn dev
```

## Run unit tests

```
yarn test
```

## Deploy app to aws

Set up your aws environment variables

```
export AWS_ACCESS_KEY_ID="{your_access_key}"
export AWS_SECRET_ACCESS_KEY="{your_secret_access_key}"
```

Deploy your app.

```
yarn deploy
```
