# JS Unit Testing D02

### 1. Install Dependencies

Run the following command in the root directory to install all necessary testing frameworks:

```bash
npm install
```

Then, install dependencies for the sub-project:

```bash
cd express
npm install
cd ..
```

### 2. Running Tests

You can run all test suites (Mocha, Jasmine, and Jest) with a single command from the root directory:

```bash
npm test
```

Alternatively, you can run specific suites:
- `npm run test:mocha`
- `npm run test:jasmine`
- `npm run test:jest`

### 3. Running the Express App

To start the local Express server:

```bash
node express/index.js
```

The server will be available at `http://localhost:3000`.
