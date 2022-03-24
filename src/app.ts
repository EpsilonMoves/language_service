import express from "express";
import { json } from "body-parser";
import { wordsRouter } from "./routes/words";

const app = express();

app.use(json());

app.use(wordsRouter);


export { app };
