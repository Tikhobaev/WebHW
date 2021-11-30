import { Request, Response } from "express";
import Db from "../db/db";


export function getUserById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const user = Db.userDb.select(id);
    if (user) {
        response.json({ id: user.id, name: user.username});
    } else {
        response.status(404);
        response.send();
    }
};

export function addUser(request: Request, response: Response) {
    const username: string = request.body.username;
    const id = Db.userDb.insert(username);
    response.json({"id": id});
};

export function updateUser(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const username: string = request.body.username;
    Db.userDb.update(id, username);
    response.send();
};

export function deleteUser(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    
    Db.userDb.delete(id);
    Db.userRecordDb.cleanUserRecords(id);
    response.send();
};