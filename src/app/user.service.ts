import { Injectable } from "@angular/core";
import { Guidy } from "./Guidy";

@Injectable()
export class UserService
{
    login(username:String, password:String)
    {
        return new Promise(resolve => resolve(true));
    }

    getGuidy(id:String)
    {
        let ran = Math.floor(Math.random() * FAKE_USERS.length)
        return new Promise(resolve => resolve(FAKE_USERS[ran]));
    }
}

export const FAKE_USERS:Guidy[] = [
    {id:1, name:"Joe", works:[1]},
    {id:2, name:"Sam", works:[2]},
    {id:3, name:"Max", works:[3]}
]