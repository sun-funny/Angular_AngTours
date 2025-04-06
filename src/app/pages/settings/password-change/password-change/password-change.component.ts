import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MessageService } from 'primeng/api';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { IUser } from '../../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [NgClass, FormsModule, ButtonModule, CheckboxModule, InputTextModule],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss'
})

export class PasswordChangeComponent {
    login: string;
    currentpassword: string;
    newpassword: string;
    repeatPassword: string;
    showCurrentPassword = false;
    showNewPassword = false;
    showConfirmPassword = false;
  
    constructor(
      private userService: UserService,
      private router: Router,
      private messageService: MessageService
    ) { }
  
  ngOnInit(): void {}

  onAuth(): void{
    const user: IUser = {
      login: this.login, 
      password: this.currentpassword
    }
    this.userService.authUser(user).subscribe({
      next: () => {console.log('password', this.currentpassword)},
      error: () => {this.initToast('error', 'Неверный логин или пароль');}
    })
  }

  initToast(type: 'error', text: string): void {
    this.messageService.add({ severity: type, detail: text, life: 3000})
  }
}
