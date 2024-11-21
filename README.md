
# Project Documentation

## Roles and Permissions

The project defines the following roles for managing access and functionalities:

- **Admin Role**:  
  `ADMIN_ROLE=4451`
- **Investor Role**:  
  `INVESTOR_ROLE=1002`

---

## Starting the Project Locally

### Without Containers
To run the project locally without Docker containers, follow these steps:

#### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn start
   ```

#### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

---

### Using Docker
To manage the project with Docker containers, use the following commands:

- **Start the containers**:
  ```bash
  docker-compose up
  ```
- **Bring down the containers**:
  ```bash
  docker-compose down
  ```
- **Start the containers (after stopping)**:
  ```bash
  docker-compose start
  ```
- **Stop the containers**:
  ```bash
  docker-compose stop
  ```

---

## Project Status

### Backend Development
The backend development is **90% complete**, with testing remaining. Below is a list of the available endpoints:

- **Postman Link**: [Postman Collection](https://www.postman.com/martian-moon-205350/workspace/task-1/collection/14661662-43d229ec-917a-4b72-8556-1d6789df4eec?action=share&creator=14661662)

- **Base API Endpoint**:  
  `/api/v1`

---

## API Endpoints

### Authentication & User Management
- **POST** `/sign-up`  
  Create a new user account.
- **POST** `/verify-otp`  
  Verify user account using OTP.
- **POST** `/request-otp`  
  Request a new OTP for verification.
- **POST** `/sign-out`  
  Log out from the system.

---

### Investment Management
- **GET** `/investments`  
  Retrieve all available investments.
- **GET** `/admin/investment/:investmentId`  
  Retrieve details of a specific investment.
- **POST** `/admin/investment`  
  Create a new investment plan (Admin only).
- **PATCH** `/admin/update/investment/:investmentId`  
  Update an investment plan (Admin only).

---

### Subscription Management
- **POST** `/plan/subscribe`  
  Subscribe to an investment plan.
- **GET** `/plans/subscriptions`  
  Retrieve all user subscriptions.
- **DELETE** `/plan/unsubscribe/:subscriptionId`  
  Unsubscribe from a specific plan.

---

### Transaction Management
- **GET** `/transactions`  
  Retrieve all transactions for the user.
- **POST** `/transaction/deposit`  
  Create a deposit transaction.
- **POST** `/transaction/withdrawal`  
  Create a withdrawal transaction.
- **PATCH** `/admin/update/transaction/:transactionId`  
  Update a transaction's status (Admin only).

---

### User Management
- **GET** `/wallet`  
  Retrieve wallet details for the logged-in user.
- **GET** `/profile`  
  Retrieve user profile details.
- **PATCH** `/profile`  
  Update user profile details.

---

### Analytics
- **GET** `/admin/transaction/analytics`  
  Retrieve transaction analytics for all users (Admin only).
- **GET** `/transaction/analytics`  
  Retrieve analytics for user transactions.
- **GET** `/transaction/stat`  
  Retrieve transaction statistics for the user.
- **GET** `/admin/transaction/stat`  
  Retrieve transaction statistics for all users (Admin only).
- **GET** `/admin/dashboard`  
  Retrieve dashboard data for the admin.

---

## License
This project is licensed under the [MIT License](LICENSE).
