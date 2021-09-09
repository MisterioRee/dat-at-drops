/**
 *
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 *
 * This code is subjected to an assesment, you might want to
 * copy this code and modify as your own need, you are free to
 * use this code as your own.
 */

import { Request, Response, NextFunction } from "express";

export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    //TODO:
    //Apply your logic to implement authentication via tokens etc
    next();
  } catch (err) {
    res.status(401).json({
      error: "Auth Faild",
      trace: err,
    });
  }
}
