import { Injectable } from "@angular/core";
import { IUser } from "../models/user";
import { IUserRegister } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { API } from "../shared/api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userStorage: IUser[] = [];
    private currentUser: IUser | null = null;

    constructor(private http: HttpClient) { }

    private getUser(login: string): IUser | null {
        return this.userStorage.find((user) => login === user.login) || null;
    }

    addUser(user: IUser, isRememberMe?: boolean): true | string {
        if (this.getUser(user.login)) {
            return 'User already exists';
        }
        this.userStorage.push(user);
        return true;
    }

    checkUser(login: string): boolean {
        return !!this.getUser(login);
    }

    registerUser(user: IUserRegister): Observable<string> {
        return this.http.post('http://localhost:3000/register', user, {responseType: 'text'});
    }

    authUser(user: IUser): Observable<string> {
        return this.http.post('http://localhost:3000/auth', user, {responseType: 'text'});
    }
}