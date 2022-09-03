import express, { Express } from 'express';
import dotenv from 'dotenv';
import  userRouter from "./app/routes/userRouter";
import bodyParser from 'body-parser';
import "./app/config/dbConnection";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/" , userRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});