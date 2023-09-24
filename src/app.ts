import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import logger from "morgan";

import { generateDocSwagger } from "express-generate-swagger";
import { connectToMongoDB } from "./config/db";
import { apiRouter } from "./routes/api";
import { snacksRouter } from "./routes/snacks";

connectToMongoDB();

export const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(fileUpload());
app.use(express.json());

app.use("/snacks", snacksRouter);
app.use("/api", apiRouter);

generateDocSwagger(app, {
  info: {
    title: "App Merenda API",
    version: "0.0.1",
    description: "Serviços disponíveis na api do app merenda",
  },
});

app.use("/", (req, res) => res.send("API Merenda"));
