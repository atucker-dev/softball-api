# Slowpitch Softball Stat Tracker API

This project is the backend API for the Slowpitch Stack Tracker web app. It's built with Node.js and Express, and uses AWS DynamoDB as the database. The API handles user authentication, data processing, and interacts with DynamoDB to store and retrieve data.

## Features

- TODO: User authentication (sign up, sign in)
- TODO: Team Creation and Statistic Tracking
- TODO: Game Schedules and sending notifications
- Local development setup with DynamoDB Local

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js and npm](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/) (for running DynamoDB Local)

### Installing & Running:

1. **Clone the repository**

```bash
git clone [your-repository-url]
cd [your-repository-directory]
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a '.env' file in the root of the project and add the neccessary environment variables:

```bash
AWS_REGION=your-aws-region
NODE_ENV=development
# Add other necessary environment variables here
```

4. **Running the application**

You can start the entire development environment including DynamoDB Local, the table creation, and the API server by running:

```bash
npm run dev
```

This command, as defined in the package.json file, performs the following commands:

Starts DynamoDB Local using Docker.
Creates the necessary tables in DynamoDB Local (if they don't already exist).
Starts the Node.js API server.

### Note on data persistence

If you're using DynamoDB Local with the -dbPath option for data persistence, your data will be saved on your local disk and will be available the next time you start DynamoDB Local. If you're not using the -dbPath option, all data will be lost when you stop the DynamoDB Local container.


## Stopping the Development Environment

When you're done with development and want to stop your local servers, you can follow these steps:

### Stopping the API Server

To stop the API server, you can simply interrupt the process:

1. Go to the terminal where your API server is running.
2. Press `Ctrl + C` to stop the server.

### Stopping DynamoDB Local

If you're using Docker to run DynamoDB Local, you can stop and remove the container with the following command:

```bash
npm run stop-dynamodb
```



