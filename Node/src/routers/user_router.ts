import express, { Router } from "express"
import  Db from "../db/db"
import { getUserById, addUser, updateUser, deleteUser } from "../views/user";
import { getUserRecordsById, addUserRecord, addUserRecordTime, deleteUserRecordTime } from "../views/user_record"

const userRouter: Router = Router();
userRouter.use(express.json());

userRouter.get("/users/:id", getUserById);
userRouter.post("/users", addUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

userRouter.get("/users/:id/games", getUserRecordsById);
userRouter.post("/users/:id/games", addUserRecord);
userRouter.post("/users/:userId/games/:gameId", addUserRecordTime);
userRouter.delete("/users/:userId/games/:gameId", deleteUserRecordTime);

export default userRouter;