# Project Documentation

## Roles and Permissions
The project uses the following roles:

- **Admin Role**:  
  `ADMIN_ROLE=4451`
- **Investor Role**:  
  `INVESTOR_ROLE=1002`

---

## Starting the Project Locally
To start the project locally, navigate to the root directory and run:



docker-compose up //spin up the containers

docker-compose down // bring down the containers
## Project Status
## Backend

The backend development is **90% complete**, with testing remaining. Below is the list of exposed endpoints:

- **Postman Link** https://www.postman.com/martian-moon-205350/workspace/task-1/collection/14661662-43d229ec-917a-4b72-8556-1d6789df4eec?action=share&creator=14661662

- **ROOT Endpoint** `/api/v1`
### Authentication & User Management
- **POST** `/sign-up`
- **POST** `/verify-otp`
- **POST** `/request-otp`

### Investment Management
- **GET** `/investments`
- **POST** `/admin/investment`
- **PATCH** `/admin/update/investment/:investmentId`

### Subscription Management
- **POST** `/plan/subscribe`
- **GET** `/plans/subscriptions`
- **DELETE** `/plan/unsubscribe/:subscriptionId`

### Transaction Management
- **GET** `/transactions`
- **POST** `/transaction/deposit`
- **POST** `/transaction/withdrawal`
- **PATCH** `/admin/update/transaction/:transactionId`

### User Management
- **GET** `/wallet`
- **GET** `/profile`
- **PATCH** `/profile`

- **Frontend**:  
  The frontend development is currently **in progress**.

---

### Note
The project was delayed due to unforeseen circumstances. However, I am confident I can complete it today if given the opportunity.
