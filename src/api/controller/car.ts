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

import { join } from "path";
const file = join(__dirname, "../assets/cars.json");

// get list of employees from database
export async function getCars(req: Request, res: Response, next: NextFunction) {
  //read from Database
  const users = await Car.find()
    .exec()
    .then((_car) => {
      res.status(500).json({
        data: _car,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
  //response to client
  return res.status(200).json({
    employees: users,
  });
}

export function getCarsbyModel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //read from Database

  //response to client
  return res.status(200).json({
    employees: file,
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
    employees: file,
  });
}
