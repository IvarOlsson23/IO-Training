const lowdb = require("lowdb");
const express = require("express");
const FileSync = require("lowdb/adapters/FileSync");
const cors = require("cors");
const adapter1 = new FileSync("diets.json");
const adapter2 = new FileSync("program.json");
const adapter3 = new FileSync("users.json");
const db1 = lowdb(adapter1);
const db2 = lowdb(adapter2);
const db3 = lowdb(adapter3);

const app = express();
app.use(cors());
app.use(express.json());

function initiateDatabase() {
  db1.defaults({ diets: [] }).write();
  db2.defaults({ program: [] }).write();
  db3.defaults({ users: [] }).write();
}

app.get("/api/diets", (_request, response) => {
  try {
    const diets = db1.get("diets").value();
    return response.json(diets);
  } catch (_error) {
    return response.status(500).json("Internal server error");
  }
});

app.get("/api/program", (_request, response) => {
  try {
    const program = db2.get("program").value();
    return response.json(program);
  } catch (_error) {
    return response.status(500).json("Internal server error");
  }
});

app.listen(5000, () => {
  console.info(`Server started on port ${PORT}`);
  initiateDatabase();
});

app.post("/api/user", (request, response) => {
  const { email, password } = request.body;
  console.log("Konto att lägga till:", email, password);

  if (!email || !password) {
    return response.status(400).json("Bad request");
  }
  const emailExists = db3.get("users").find({ email }).value();

  if (emailExists) {
    return response.status(409).json("Email or username already exists");
  }

  try {
    db3.get("users").push({ email, password }).write();
    return response.status(201).json("Registered account successfully");
  } catch (error) {
    console.error(error);
    return response.status(500).json("Internal server error");
  }
});

const PORT = 5000;
