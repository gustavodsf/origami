import "reflect-metadata";
import "express-async-errors";
import compression from "compression";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";

import { router } from "./router";

const app = express();

require('dotenv').config()

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(router);

app.use(
(err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(5000, () => console.log("Server is running 5000"));