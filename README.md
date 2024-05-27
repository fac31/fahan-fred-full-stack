# Full-Stack Project: Financial Pulse

## Project Brief

Our project is to build a dynamic web application that queries at least two APIs and presents useful and/or interesting information to the user. We use Node.js and Express, which will involve serving a static web page, creating JSON endpoints, and generating dynamic content through both server-side and client-side code.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/fac31/fahan-fred-full-stack.git
    cd https://github.com/fac31/fahan-fred-full-stack.git
    ```

2. **Checkout the main branch and pull the latest changes**:
    ```sh
    git checkout main
    git pull origin main
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Build the project**:
    ```sh
    npm run build
    ```

5. **Start the server**:
    ```sh
    npm start
    ```

6. **Run the development server** (in a separate terminal):
    ```sh
    npm run dev
    ```

### Environment Variables

Make sure to create a `.env` file with the necessary environment variables:
NEWS_API_KEY=<Your News API Key>
OPENAI_API_KEY=<Your OpenAI API Key>

## Project Folder Overview

  ```sh
  project-root/
  │
  ├── public/
  │ ├── index.html
  │ ├── script.js
  │ └── style.css
  │
  ├── server.js
  ├── webpack.config.js
  ├── package.json
  └── .env
  ```

### Folder and File Descriptions

- **public/**: Contains all the client-side files.
  - **index.html**: The main HTML file that includes the structure of our webpage.
  - **script.js**: The main JavaScript file that handles fetching data, creating dynamic content, and integrating the chat component and news reel.
  - **style.css**: The main CSS file that handles the styling of the webpage.

- **server.js**: Sets up the Express server, handles API endpoints, and serves static files.
  - **API Endpoints**: 
    - `/api/data`: Fetches data from the News API.
    - `/chat-api`: Handles chat requests using the OpenAI API.

- **webpack.config.js**: Configuration file for Webpack to bundle JavaScript and CSS files.
  - **Entry Point**: `./public/script.js`
  - **Output**: `./public/bundle.js`
  - **Dev Server**: Runs on port 8080, proxies API requests to the Express server on port 3000.

- **package.json**: Contains project metadata and dependencies.
  - **Scripts**:
    - `build`: Bundles the project using Webpack.
    - `start`: Starts the Express server.
    - `dev`: Starts the Webpack development server.

- **.env**: Stores environment variables like API keys.

## Additional Information

- **Contact Details**: Contact Fahan Ibrahim-Hashi and Fred Hartley for any questions




