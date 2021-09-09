import mongoose, { Schema } from "mongoose";

interface ICar {
  Id: number;
  mpg?: number;
  cylinders?: number;
  displacement?: number;
  horsepower?: number;
  weight?: number;
  acceleration?: number;
  model?: number;
  origin?: number;
  car_name: string;
}

const CarSchema: Schema = new Schema({
  Id: { type: Number, required: true },
  mpg: Number,
  cylinders: Number,
  displacement: Number,
  horsepower: Number,
  weight: Number,
  acceleration: Number,
  model: Number,
  origin: Number,
  car_name: { type: String, required: true },
});

const Car = mongoose.model<ICar>("Car", CarSchema);

export default Car;
