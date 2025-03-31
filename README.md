## Simple TODO API

> Todo REST API with Node and Postgres

## Getting Started
Update the `.env` with below environment variables
```js
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: +process.env.POSTGRES_PORT!,
});
```

Install the dependencies

```bash
npm i
# or
yarn
```

Spin up the development server:

```bash
npm run dev
# or
yarn dev
```