import express from "express";
import logger from "morgan";
// import session from 'express-session'
import fileUpload from "express-fileupload";
import cors from "cors";

import { connectToMongoDB } from "./config/db";
import { join } from "path";
// import { viewsRouter } from './routes/views'
import { snacksRouter } from "./routes/snacks";
import { apiRouter } from "./routes/api";
// import MongoStore from "connect-mongo";

connectToMongoDB();

export const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(fileUpload());
app.use(express.json());

app.use("/snacks", snacksRouter);
app.use("/api", apiRouter);
app.use("/", (req, res) => res.send("API Merenda"));
