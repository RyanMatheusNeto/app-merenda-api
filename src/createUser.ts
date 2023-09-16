import dotenv from "dotenv";

import { connectToMongoDB } from "./config/db";
import { UserModel } from "./models/UserModel";
import { createUserObject } from "./utils/security";

dotenv.config();

connectToMongoDB().then(async () => {
  const user = createUserObject(
    "camila.ribeiro@ifms.edu.br",
    "Sidney Sousa",
    "admin123aiquefome"
  );

  const user2 = createUserObject("admin", "admin", "admin");

  const savedObj = await UserModel.create(user);
  const savedObj2 = await UserModel.create(user2);
  console.log(savedObj);
  console.log(savedObj2);
});
