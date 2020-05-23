# Counter Strike: Global Offensive Information API

An API that shows the information of the current Counter Strike: Global Offensive community server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need [NodeJS](https://nodejs.org/en/) on your machine.

### Installing

Git clone the repository and after that go to the folder `back-end`, run:

```bash
npm install
```

or

```bash
yarn install
```

After that you can create a `.env` file on that directory: `backend/.env`. Use the [.env.example](backend/.env.example) to create your own .env.
P.S.: You can only change the `PRIVATE_KEY` for the JWT authentication and `TYPEORM_DATABASE` to choosing the database directory.

After that you can run `yarn build && yarn start:prod` or `npm run build && npm run start:prod`.

And open a new terminal and start frontend: 
```bash
  cd frontend

  yarn start
```

or

```bash
  cd frontend

  npm start
```

### Built With

- [Nest.js](https://nestjs.com/) - Framework used on back-end.
- [Gamedig](https://www.npmjs.com/package/gamedig) - Query library used to track information.
- [Create React App](https://github.com/facebook/create-react-app) - Bootstrapped with ReactJS.