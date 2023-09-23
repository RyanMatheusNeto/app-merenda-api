import { Schema, model } from "mongoose";
export interface ReviewSnack {
  score: number;
  description: string;
  email: string;
  snackId: string;
}

const schema = new Schema<ReviewSnack>({
  score: { type: Number, required: true, min: 1, max: 5 },
  description: { type: String, required: false, maxlength: 250 },
  email: { type: String, required: true },
  snackId: { type: String, required: true},
});

export const ReviewSnackModel = model("ReviewSnack", schema);
