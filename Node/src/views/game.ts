import { Request, Response } from "express";
import Db from "../db/db";


export function getGameById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const game = Db.gameDb.select(id);
    if (game) {
        response.json({ 
            id: game.id,
            title: game.title,
            description: game.description,
            ageRating: game.ageRating,
            images: game.images
        });
    } else {
        response.status(404);
        response.send();
    }
};

export function getAllGames(request: Request, response: Response) {
    response.json(Db.gameDb.selectAll());
};

export function addGame(request: Request, response: Response) {
    const title: string = request.body.title;
    const description: string = request.body.description;
    const ageRating: string = request.body.ageRating;
    const images: string[] = request.body.images;

    const id = Db.gameDb.insert(title, description, ageRating, images);
    response.json({"id": id});
};

export function updateGame(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const title: string = request.body.title;
    const description: string = request.body.description;
    const ageRating: string = request.body.ageRating;
    const images: string[] = request.body.images;

    Db.gameDb.update(id, title, description, ageRating, images);
    response.send();
};

export function deleteGame(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    Db.gameDb.delete(id);
    response.send();
};