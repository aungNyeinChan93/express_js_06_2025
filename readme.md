# Express 02

A simple yet flexible Express.js project designed for learning, experimentation, and rapid prototyping of RESTful APIs.

## Features

- **Basic Express.js server setup:** Quickly spin up a local server.
- **RESTful API structure:** Organized routes for scalable API development.
- **Easy to extend and customize:** Modular codebase for adding new features.
- **Hot-reloading with Nodemon:** Automatic server restarts during development.
- **Sample JSON API:** Includes a mock JSON server for testing endpoints.
- **Clear project structure:** Well-organized folders and files for maintainability.

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd express_02
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **(Optional) Start the mock JSON server:**

   ```bash
   npm run json
   ```

5. **Access the API:**
   - The Express server runs at `http://localhost:3000` by default.
   - The mock JSON server (if used) runs at `http://localhost:3001`.

## Project Structure

```
express_02/
├── node_modules/
├── src/
│   ├── index.js         # Main server entry point
│   ├── routes/          # API route definitions
│   ├── controllers/     # Request handlers
│   └── data/            # Sample data or JSON files
├── db.json              # Mock database for JSON server
├── package.json
└── readme.md
```

## Scripts

- `npm run dev` — Start the Express server with hot-reloading (using Nodemon).
- `npm run json` — Launch the mock JSON server for testing.

## Requirements

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Useful Resources

- [Express.js Documentation](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [json-server](https://github.com/typicode/json-server)

## License

<!-- MIT — Feel free to use, modify, and distribute this project. -->
