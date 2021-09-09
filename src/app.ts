/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 *
 * This code is subjected to an assesment test, you might want to
 * copy this code and modify as your own need, you are free to
 * use this code as your own.
 */

import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser"; // Middleware

const app: Application = express();
const PORT: string = process.env.port || "3000";

//Parcing request body to read perameters
//Returns middleware that only parses urlencoded
//bodies and only looks at requests where the Content-Type
//header matches the type option
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Returns middleware that only parses json and only
//looks at requests where the Content-Type header
//matches the type option.
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authrization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Header", "PUT, GET, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

//Invalid routes
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => console.log("Server is running on", PORT));
