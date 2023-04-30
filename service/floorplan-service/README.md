# Floorplan Service

![Version Badge](https://img.shields.io/badge/Version-v1.0.1-blue)
![Version Badge](https://img.shields.io/badge/Node-v19.6.0-yellow)
![Version Badge](https://img.shields.io/badge/NPM-v9.4.0-red)

This repository is intended to house the backend part for the floorplan service api. This service is responsible to manage Machine Learning models and OpenAI logic.

### Interface

```ts
interface ResponseInterface {
  status: string; // request status
  data: string; // generated data/image of the floorplan
}
```

### Local setup

- This local setup is provided as is
- In order to run the formatter with `vscode`, the prettier extension needs to be installed
- After installing the extension, add the following `json` to your `.vscode/settings.json` file:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "jest.jestCommandLine": "npm run test --",
  "jest.autoRun": "off"
}
```

- In order to have the local environment variables set up, add the following `.env` file in the root of the project:

```
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
PROTOCOL=http
HOST=localhost
PORT=3040
```

- Finally, to install all the dependencies, run the following:

```bash
npm install
```

### Running the service

- In order to run the service locally, after all the steps, run the following command:

```bash
npm run dev
```

### Database setup (Optional)

install mongodb community edition and start the database locally.

### Docker (Optional)

- In order to run the service in Docker, run the following command:

```bash
docker build -t username/floorplan-service -f  .docker/Dockerfile .
docker run -p 3030:3030 -d username/floorplan-service --enf-file .env
```

### Links of interest

- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
