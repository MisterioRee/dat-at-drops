/**
import { ICar } from './../utils/iCommon';
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 *
 * This code is subjected to an assment, you might want to
 * copy this code and modify as your own need, you are free to
 * use this code as your own.
 */

import { Router } from "express";
import { getCars, getCarsbyModel, getCarsbyCylinders } from "../controller/car";
import { auth } from "../middleware/check-auth";

const carsRouter = Router();

carsRouter.get("/", auth, getCars);
carsRouter.get("/:model", auth, getCarsbyModel);
carsRouter.get("/:cylinders", auth, getCarsbyCylinders);

export default carsRouter;
