# Currency Converter Backend

This is the live backend server for the Currency Converter application, providing endpoints to fetch and manage transaction data.

## Base URL

[Currency Converter Server](https://currency-converter-backend-vercel-fix.vercel.app/api/)

## Endpoints

### 1. **GET /workouts**

- **Description**: Fetches all transactions related to currency conversions from the server.
- **Response**: Returns a list of all transaction records.
- **Example**:
    ```json
    [
        {
            "fromCountry": "USD",
            "toCountry": "INR",
            "fromCurrency": "USD",
            "toCurrency": "INR",
            "exchangeRate": 75.5,
            "amount": 100,
            "convertedAmount": 7550,
            "date": "2025-03-07",
            "time": "14:30"
        },
        ...
    ]
    ```

### 2. **POST /workouts**

- **Description**: Submits a new transaction record for currency conversion.
- **Request Body**:
    ```json
    {
        "fromCountry": "USD",
        "toCountry": "INR",
        "fromCurrency": 1,
        "toCurrency": 75.5,
        "exchangeRate": 75.5,
        "amount": 100,
        "convertedAmount": 7550,
        "date": "2025-03-07",
        "time": "14:30"
    }
    ```
- **Response**: Returns the created transaction record.

### 3. **DELETE /workouts/:id**

- **Description**: Deletes a specific transaction record based on the given ID.
- **Request Parameters**:
    - `id`: The unique identifier of the transaction record to be deleted.
- **Response**: Returns a success message confirming the deletion.

## Deployment

This backend is deployed on Vercel for seamless and efficient performance. It provides fast and scalable serverless functions.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB Atlas**: Cloud-based database service to store transaction data.
- **Vercel**: Deployment platform for serverless applications.
- **Mongoose**: MongoDB object modeling for Node.js.

## How to Run Locally

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your `.env` file with the necessary MongoDB connection string.
4. Start the server:
    ```bash
    npm run dev
    ```

## License

This project is open-source and available under the [MIT License](LICENSE).
