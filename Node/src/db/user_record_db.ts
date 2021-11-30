import UserRecord from "../models/user_record";


export default class UserRecordDb {
    userRecords: UserRecord[];
    nextId: number;

    constructor(userRecords: UserRecord[]) {
        this.userRecords = userRecords;
        this.nextId = userRecords.length + 1; // indexing from 1
    }

    select = (userId: number) => {
        return this.userRecords.filter(userRecord => userRecord.user == userId && userRecord.deleted == false);
    };

    insert = (user: number, game: number, playTime: number = 0) => {
        console.log(user, game)
        const existingRecord = this.userRecords.find(
            userRecord => userRecord.user == user && userRecord.game == game
        );
        
        console.log(existingRecord);

        if (existingRecord) {
            // Restore record
            existingRecord.deleted = false;
        } else {
            this.userRecords.push({id: this.nextId, user: user, game: game, playTime: playTime, deleted: false});
        }
        this.nextId++;
    };

    increasePlayTime = (userId: number, gameId: number, timeToAdd: number) => {
        const userRecord = this.userRecords.find(
            userRecord => userRecord.user == userId && userRecord.game == gameId && userRecord.deleted == false
        );

        if (userRecord) {
            userRecord.playTime += timeToAdd;
            return userRecord.playTime;
        } else {
            return -1;
        }
        
    };

    delete = (userId: number, gameId: number) => {
        const userRecord = this.userRecords.find(
            userRecord => userRecord.user == userId && userRecord.game == gameId
        );
        if (userRecord) {
            userRecord.deleted = true;
            return true;
        } else {
            return false;
        }
    };

    cleanUserRecords = (userId: number) => {
        const userRecords = this.userRecords.filter(
            userRecord => userRecord.user == userId
        );

        for (const record of userRecords) {
            console.log(record);
            record.user = -1;
            record.deleted = true;
            console.log(record);
        }

        console.log('------------------')
        console.log(this.userRecords);
    };
}