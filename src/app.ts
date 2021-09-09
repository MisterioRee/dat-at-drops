/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 *
 * This code is subjected to an assesment, you might want to
 * copy this code and modify as your own need, you are free to
 * use this code as your own.
 */

import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import Log from "./api/middleware/log";

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:[]@node-ecom-cluster.jmrtf.mongodb.net/drops?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(() => {
  const collection = client.db("drops").collection("cars");
  // perform actions on the collection object
  // client.close();
});

//import sub-routers
import carsRouter from "./api/routes/car";

const app: Application = express();
const PORT: string = process.env.port || "3000";
const routes = Router();

//CORS
app.use((req, res, next) => {
  Log.info("Booting the 'CORS' middleware...");
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

routes.use("/api/cars", carsRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

//Activating sub modules
app.use(routes);

//Invalid routes
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  Log.warn("Tries accessing URL: " + req.originalUrl);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => console.log("Server is running on", PORT));
