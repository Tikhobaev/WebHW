import userRecord from "../models/user_record";

export const userRecordFixtures: userRecord[] = [
    {
        id: 1,
        user: 1,
        game: 4,
        playTime: 400,
        deleted: false
    },
    {
        id: 2,
        user: 1,
        game: 1,
        playTime: 20,
        deleted: false
    },
    {
        id: 3,
        user: 1,
        game: 3,
        playTime: 10,
        deleted: false
    },
    {
        id: 4,
        user: 2,
        game: 3,
        playTime: 175,
        deleted: false
    },
    {
        id: 5,
        user: 2,
        game: 2,
        playTime: 230,
        deleted: false
    }
]