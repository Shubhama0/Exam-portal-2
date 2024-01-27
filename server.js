import express from "express";
import connectDB from "./Models/db.js";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";

//deploy
import path from "path";
import { fileURLToPath } from "url";
//es6module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//deploy
app.use(express.static(path.join(__dirname, "./client/build")));

connectDB();
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("api running");
});
// rest api deploy
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = 8080;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
