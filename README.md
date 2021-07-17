# instructions:

1. Clone the repository.
2. Go to `./backend` and run `npm install` or `yarn`.
3. Go to `../frontend` and run `npm install` or `yarn`.
4. Run `npm run start` or `yarn start`. It will run the `start` in `package.json`. I changed the start command to run both the server and the clinet: `node ../backend/rest.js & react-scripts start`. I added `"proxy": "http://localhost:3001/"` to package.json to avoid CORS issues.

# Libraries I used:

## In backend

1. express.js

## In frontend

1. styled-components
2. axios
