# Future Deals Sandbox Project

This project is an Excel Viewer application that allows users to log in, upload Excel or CSV files, view the file's content in a table format, apply filtering and sorting, and navigate through the table using pagination. The application is built using React, TypeScript, Node.js, and MongoDB.

## Table of Contents

- [Instructions to Run the Application]
- [Design Choices and Libraries/Frameworks]

## Instructions to Run the Application

To run the Future Deals Sandbox application locally, follow these steps:

1. **Clone the Repository:**
   git clone <repository_url>
   cd future-deals-sandbox

2. **Install Dependencies:**
   Navigate to the client and server directories and install the necessary dependencies.

   cd client
   npm install

   cd ../server
   npm install

3. **Set Up MongoDB:**
   Make sure you have a MongoDB instance running or set up a cloud-based MongoDB service. Update the MongoDB connection URI in the server's `.env` file.

4. **Run the Application:**
   Start the client and server applications.

   # Start the client (React app)

   cd client
   npm start

   # Start the server (Node.js server)

   cd ../server
   npm run dev

5. **Access the Application:**
   Open your browser and navigate to the [API_URL] address to access the Future Deals Sandbox application.

## Design Choices and Libraries/Frameworks

### Frontend (Client)

- **React:** Chosen for its component-based architecture and efficient rendering, making it ideal for building interactive user interfaces.
- **TypeScript:** Used to add static typing and improve code maintainability and reliability.
- **axios:** Utilized for making HTTP requests to the server for uploading files and fetching data.
- **react-dom:** This package serves as the entry point to the DOM and server renderers for React.

### Backend (Server)

- **Node.js:** Selected for its asynchronous and event-driven nature, making it suitable for building scalable and performant server applications.
- **Express:** Utilized as the web application framework for handling HTTP requests, routing, and middleware integration.
- **MongoDB:** Chosen as the database to store user information and file metadata.
- **mongoose:** Employed for modeling and interacting with the MongoDB database.
- **cors:** CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

This application is about creating a mini-sandbox for futures trading, inspired by the functionality of the popular Binance platform. Tasks include development of server and client code, database design, integration with external APIs for price monitoring, and development of an algorithm for settlement of futures contracts.

The application follows a client-server architecture. The client is responsible for the user interface and interacting with the user, while the server handles integration with external API. MongoDB was chosen for its flexibility and scalability. The use of TypeScript improves code quality and provides a more robust development experience. Integration of various libraries and frameworks enhances the functionality and user experience of the Future Deals Sandbox application.
