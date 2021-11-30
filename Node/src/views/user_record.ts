import { Request, Response } from "express";
import Db from "../db/db";


export function getUserRecordsById(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    const userRecords = Db.userRecordDb.select(userId);
    const gameIds = userRecords.map(userRecord => userRecord.game);
    const games = Db.gameDb.selectIds(gameIds);

    response.json({ 
        games: userRecords.map(userRecord => {
            return {
                game: games.find(game => game.id == userRecord.game)?.title,
                playTime: userRecord.playTime
            }
        })
    });
};

export function addUserRecord(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    const gameId = parseInt(request.body.id);
    
    Db.userRecordDb.insert(userId, gameId);
    response.send();
};

export function addUserRecordTime(request: Request, response: Response) {
    const userId = parseInt(request.params.userId);
    const gameId = parseInt(request.params.gameId);
    const game = request.body.game;
    const playTime = parseInt(game.playTime);

    Db.userRecordDb.increasePlayTime(userId, gameId, playTime)
    response.send();
};

export function deleteUserRecordTime(request: Request, response: Response) {
    const userId = parseInt(request.params.userId);
    const gameId = parseInt(request.params.gameId);

    Db.userRecordDb.delete(userId, gameId);
    response.send();
};