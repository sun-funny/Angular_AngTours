import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../../models/user';

import { CheckboxModule } from 'primeng/checkbox';
import { UserService } from '../../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-registration',
  imports: [NgClass, FormsModule, ButtonModule, CheckboxModule, InputTextModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})

export class RegistrationComponent implements OnInit { 
  login: string = null;
  password: string;
  repeatPassword: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText = 'Сохранить пользователя в хранилище';
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    
  }

  onAuth(ev: Event): void{
      this.userService.addUser({login: this.login, password: this.password})
  }

  input(ev: Event): void {
  }
}

