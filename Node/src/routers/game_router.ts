import express, { Router } from "express"
import  Db from "../db/db"
import { getGameById, getAllGames, addGame, updateGame, deleteGame } from "../views/game";

const gameRouter: Router = Router();
gameRouter.use(express.json());

gameRouter.get("/games/:id", getGameById);
gameRouter.get("/games", getAllGames);
gameRouter.post("/games", addGame);
gameRouter.put("/games/:id", updateGame);
gameRouter.delete("/games/:id", deleteGame);

export default gameRouter;