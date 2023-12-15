
---

# URL Shortener Backend

This is a simple URL shortener backend project built with Node.js, Express, and TypeORM.

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/urlshortener_backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd urlshortener_backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up database settings:

   - Open the `data-source.ts` file and configure the database settings according to your environment.

## Run the Project

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:YOUR_PORT` where `YOUR_PORT` is the port specified in your environment.

## Usage

### 1. Add a URL:

   - Send a POST request to `http://localhost:YOUR_PORT/addurl` with a JSON body containing the long URL you want to shorten:

     ```bash
     curl -X POST -H "Content-Type: application/json" -d '{"newurl": "https://www.example.com"}' http://localhost:YOUR_PORT/addurl
     ```

     Example Response:

     ```json
     { "shorturl": "http://localhost:YOUR_PORT/abcd" }
     ```

### 2. Redirect to the Original URL:

   - Open the shortened URL in a web browser or use `curl`:

     ```bash
     curl http://localhost:YOUR_PORT/abcd
     ```


Make sure to replace `YOUR_PORT` with the actual port specified in your environment configuration. Adjust any other details based on your specific project setup. This README provides a quick guide for new visitors to run and interact with your URL shortener backend.
