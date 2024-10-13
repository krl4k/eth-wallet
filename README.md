# Ethereum Wallet React App

This project is a simple Ethereum wallet application built with React. It allows users to create a wallet, log in using a seed phrase, check their balance, and send transactions.

## Prerequisites

Before you begin, ensure you have the following installed:

* Node.js and npm. You can download them from [here](https://nodejs.org/).
* An Infura account and project ID. You can sign up [here](https://infura.io/).

## Running with Docker

If you prefer to use Docker, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your system.

2. Create a `.env` file in the root directory of the project with the following content:
   ```
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   REACT_APP_NETWORK=mainnet
   ```
   Replace `your_infura_project_id` with your actual Infura Project ID.

3. Build and run the Docker container:
   ```
   docker-compose up --build
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

To stop the container, use:
```
docker-compose down
```

Note: This Docker setup runs the application in development mode. For a production setup, you would need to modify the Dockerfile to build the app and serve it with a production-ready web server.


## Project Setup

Follow these steps to set up your development environment:

1. Clone the repository:
   ```
   git clone https://github.com/krl4k/ethereum-wallet-react.git
   ```

2. Navigate to the project directory:
   ```
   cd ethereum-wallet-react
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:
   ```
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   REACT_APP_NETWORK=mainnet
   ```
   Replace `your_infura_project_id` with your actual Infura Project ID.

   Note: For development and testing purposes, it's better to use a test network such as Goerli or Sepolia instead of the main network (mainnet). In this case, replace `mainnet` with `goerli` or `sepolia`.

## Running the Application

To run the application in development mode, use the following command:

```
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.


## Important Notes

- This application is intended for educational purposes only. It is not secure enough for handling real Ethereum transactions.
- Never share your private keys or seed phrases with anyone.
- In a real-world application, you would need to implement additional security measures, especially regarding the storage and handling of private keys and seed phrases.

## Functionality

- Creating a new wallet
- Logging into an existing wallet using a seed phrase
- Viewing ETH balance
- Sending ETH transactions
- Automatic session saving (user remains logged in after page reload)

## Project Structure

- `src/components/` - React components
- `src/services/` - Services for working with Ethereum
- `src/App.js` - Main application component
- `src/App.css` - Application styles
