# Frozify - Backend

## Introduction

Welcome to the backend repository of Frozify, the premier online platform dedicated to all things refrigeration. This backend repository serves as the foundation for Frozify's dynamic marketplace, providing robust server-side functionalities and seamless integration with the frontend. Leveraging advanced technologies such as Node.js, Express, TypeScript, MongoDB, and Mongoose, this backend system ensures optimal performance, scalability, and reliability for Frozify's ecosystem.

## Technologies Used

**Backend:**

- Node.js
- Express
- TypeScript

**Database:**

- MongoDB
- Mongoose

## Project Overview

Frozify's backend is designed to complement the frontend's feature-rich experience, focusing on providing efficient data handling, authentication, and API endpoints for seamless communication with the client-side application. It acts as the intermediary between the frontend interface and the database, facilitating smooth data flow and real-time updates.

## Key Features

- **RESTful API Endpoints:**

  - Implement RESTful API endpoints to handle CRUD operations for products, users, and other resources.
  - Ensure consistency and reliability in data retrieval and manipulation.

- **Data Validation and Sanitization:**

  - Implement validation and sanitization techniques to ensure data integrity and prevent security vulnerabilities.
  - Utilize libraries like Joi for schema validation and sanitization.

- **Database Integration:**

  - Integrate MongoDB as the backend database for storing and retrieving product information, user data, and other relevant resources.
  - Utilize Mongoose for defining schemas, models, and database interactions.

- **Middleware:**

  - Implement middleware functions for handling common tasks such as error handling, logging, and request processing.
  - Ensure modularity and extensibility through middleware composition.

- **Scalability and Performance:**
  - Optimize database queries and operations for improved performance and scalability.
  - Implement caching mechanisms where applicable to reduce latency and enhance responsiveness.

## API Endpoints

### Products

#### Add Product

- **Method:** POST
- **Endpoint:** `/api/v1/products/`
- **Request Body:**
  - Product details according to the schema specified in the `productValidationSchema`.
- **Middleware:**
  - `validateRequest`: Validates the request body against the `productValidationSchema`.

#### Get All Products

- **Method:** GET
- **Endpoint:** `/api/v1/products/`

#### Get All Flash Sale Products

- **Method:** GET
- **Endpoint:** `/api/v1/products/flash-sale`

#### Get All Popular Products

- **Method:** GET
- **Endpoint:** `/api/v1/products/popular-products`

#### Get Single Product

- **Method:** GET
- **Endpoint:** `/api/v1/products/:id`

#### Update Product

- **Method:** PATCH
- **Endpoint:** `/api/v1/products/:id`
- **Request Body:**
  - Product details according to the schema specified in the `productValidationSchema`.
- **Middleware:**
  - `validateRequest`: Validates the request body against the `productValidationSchema`.

#### Delete Product

- **Method:** DELETE
- **Endpoint:** `/api/v1/products/:id`

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iibrahim70/frozify-server/
   ```

2. Navigate to the project directory:

   ```bash
   cd frozify-server
   ```

### Running the Application

1. Install dependencies:

```bash
pnpm i
```

2. Run the development server:

```bash
pnpm start:dev
```

Open http://localhost:5000 in your browser to view the application.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new features to add, please fork the repository and submit a pull request.
