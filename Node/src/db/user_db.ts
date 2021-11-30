import User from "../models/user";

export default class UserDb {
    users: User[];
    nextId: number;

    constructor(users: User[]) {
        this.users = users;
        this.nextId = users.length + 1; // indexing from 1
    }

    select = (id: number) => {
        const user = this.users.find((user: User) => user.id == id);
        return user;
    };

    insert = (username: string) => {
        this.users.push({id: this.nextId, username: username})
        return this.nextId++;
    };

    update = (id: number, username: string) => {
        const user = this.users.find((user: User) => user.id == id);
        if (user) {
            user.username = username;
            return user.id;
        } else {
            return null;
        }
    };

    delete = (id: number) => {
        this.users = this.users.filter((user) => user.id != id);
    };
}