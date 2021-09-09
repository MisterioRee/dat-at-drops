/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 *
 * This code is subjected to an assment, you might want to
 * copy this code and modify as your own need, you are free to
 * use this code as your own.
 */

import { Request, Response, NextFunction } from "express";
import Car from "../model/car";

// import carsset from "../../assets/cars.json";
import { mongClient } from "../providers/database";

// get list of employees from database
export async function getCars(req: Request, res: Response, next: NextFunction) {
  //read from Database
  console.log("Fetching Cars..!!");

  mongClient.connect(async () => {
    console.log("Connecting DB..!!");
    await Car.find()
      .exec()
      .then((_cars) => {
        console.log("Cars ");
        res.status(200).json({
          data: _cars,
        });
      })
      .catch((err) => {
        console.log("Err ");

        res.status(500).json({
          error: err,
        });
      });

    // mongClient.close();
  });
}

//get
export function getCarsbyModel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //read from Database

  //response to client
  return res.status(200).json({
    data: "getCarsbyModel",
  });
}
export function getCarsbyCylinders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //read from Database

  //response to client
  return res.status(200).json({
    data: "getCarsbyCylinders",
  });
}
