import Game from "../models/game";

export default class UserDb {
    games: Game[];
    nextId: number;

    constructor(games: Game[]) {
        this.games = games;
        this.nextId = games.length + 1; // indexing from 1
    }

    select = (id: number) => {
        const game = this.games.find((game) => game.id == id);
        return game;
    };

    selectIds = (ids: number[]) => {
        const games = this.games.filter((game) => ids.includes(game.id));
        return games;
    };

    selectAll = () => {
        return this.games;
    };

    insert = (title: string, description: string, ageRating: string, images: string[]) => {
        this.games.push({
            id: this.nextId,
            title: title,
            description: description,
            ageRating: ageRating,
            images: images
        })
        return this.nextId++;
    };

    update = (id: number, title: string, description: string, ageRating: string, images: string[]) => {
        const game = this.games.find((game) => game.id == id);
        if (game) {
            game.title = title;
            game.description = description;
            game.ageRating = ageRating;
            game.images = images;

            return game.id;
        } else {
            return null;
        }
    };

    delete = (id: number) => {
        this.games = this.games.filter((game) => game.id != id);
    };
}