import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../../models/user';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-authtorization',
  imports: [NgClass, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './authtorization.component.html',
  styleUrl: './authtorization.component.scss',
})
export class AuthtorizationComponent implements OnInit, OnDestroy{ 
  login: string;
  password: string;
  constructor(private userService: UserService,
      private messageService: MessageService,
              private router: Router
  ) {
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onAuth(): void{

    const user = {login: this.login, password: this.password} as IUser;

    this.userService.authUser(user).subscribe({
      next: () => {this.router.navigate(['tickets']);},
      error: () => {this.initToast('error', 'Неверный логин или пароль');}
    })

  }

  initToast(type: 'error', text: string): void {
    this.messageService.add({ severity: type, detail: text, life: 3000})
  }
}