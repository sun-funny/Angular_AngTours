import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-authtorization',
  imports: [NgClass, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './authtorization.component.html',
  styleUrl: './authtorization.component.scss',
})
export class AuthtorizationComponent implements OnInit, OnDestroy{ 
  login: string;
  password: string;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onAuth(ev: Event): void{

    const user: IUser = {
      login: this.login,
      password: this.password,
    }
    this.userService.authUser(user);
      
  }
}