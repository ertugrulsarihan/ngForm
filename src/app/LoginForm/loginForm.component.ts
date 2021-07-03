import { Component } from "@angular/core";
import { AuthService } from "./loginForm.service";

@Component({
    selector: 'login',
    templateUrl: './loginForm.component.html',

})

export class Loginform {
    constructor(public auth: AuthService) {

    }
    Username
    Password
    mouseoverLogin



    showConsole(formValue): void {
        console.log(formValue);
        this.auth.loginUser(formValue.Username, formValue.Password);
        console.log(this.auth.myUser);

    }

}