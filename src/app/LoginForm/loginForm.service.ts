import { Injectable } from "@angular/core";
import { FormValues } from "./loginForm.model";

@Injectable()

export class AuthService {
    myUser: FormValues

    loginUser(Username: string, Password: string) {
        this.myUser = {
            id: 1,
            Username: Username,
            Password: Password
        }
    }

    isAuth() {
        return !!this.myUser;
    }

}