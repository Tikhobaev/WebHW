import Game from "./game";

export default interface userRecord {
    id: number;
    user: number;
    game: number;
    playTime: number;
    deleted: boolean;
}