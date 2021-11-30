import UserDb from "./user_db";
import GameDb from "./game_db"
import UserRecordDb from "./user_record_db"
import { userFixtures } from "../fixtures/user_fixtures"
import { gameFixtures } from "../fixtures/game_fixtures"
import { userRecordFixtures } from "../fixtures/user_record_fixtures"


interface DB {
    userDb: UserDb;
    gameDb: GameDb;
    userRecordDb: UserRecordDb;
}

const Db: DB = {
    userDb: new UserDb(userFixtures),
    gameDb: new GameDb(gameFixtures),
    userRecordDb: new UserRecordDb(userRecordFixtures)
}

export default Db;