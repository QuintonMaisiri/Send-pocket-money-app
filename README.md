# Wiremit Front-End Developer Task

This project is the front-end solution for the Wiremit interview task.

---

## **Setup Instructions**

### 1. Clone the repository

```bash
git clone https://github.com/QuintonMaisiri/Send-pocket-money-app.git
cd Send-pocket-money-app
```

### 2. Install dependencies

This project uses **Yarn**:

```bash
yarn install
```

### 3. Create environment variables

Create a `.env` file in the root directory and add the following:

```env
FX_RATES_API_URL=https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS
```

### 4. Start the development server

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

---


## **Notes**

* Make sure the `.env` file is in the root directory.
* The API URL in the `.env` file provides exchange rates for the application.

---

## **Build for Production**

```bash
yarn build
yarn start
```

