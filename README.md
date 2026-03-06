# Node Bootcamp Project - Natours

A RESTful API built with Node.js and Express for managing tour data. This project serves as a learning platform for backend development concepts.

## Description

This application provides a simple API for managing tours and users. It demonstrates core concepts like routing, middleware, and request handling using the Express framework.

## Key Features

- **RESTful API**: Endpoints for managing Tours and Users.
- **Middleware**: Includes `morgan` for logging and custom request timing middleware.
- **Data Persistence**: Uses local JSON files (`dev-data/data/tours-simple.json`) for data storage (mock database).
- **Static Assets**: Serves static files from the `public` directory.
- **Server-Side Rendering**: Includes Pug templates (in `templates/`) for potential frontend integration.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/pepefcardoso/node-bootcamp.git
    cd node-bootcamp
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the server:

```bash
node app.js
```

The server will start on port `3000` by default.
Open your browser or API client (like Postman) and navigate to:

-   `http://localhost:3000/api/v1/tours` to view all tours.

## API Endpoints

### Tours
-   `GET /api/v1/tours` - Get all tours
-   `POST /api/v1/tours` - Create a new tour
-   `GET /api/v1/tours/:id` - Get a specific tour
-   `PATCH /api/v1/tours/:id` - Update a tour
-   `DELETE /api/v1/tours/:id` - Delete a tour

### Users
-   `GET /api/v1/users` - Get all users
-   `POST /api/v1/users` - Create a new user
-   `GET /api/v1/users/:id` - Get a specific user
-   `PATCH /api/v1/users/:id` - Update a user
-   `DELETE /api/v1/users/:id` - Delete a user

## Project Structure

```
.
├── app.js              # Main application entry point
├── dev-data/           # Development data files
├── public/             # Static assets (HTML, CSS, images)
├── templates/          # Pug templates
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## License

This project is licensed under the ISC License.