import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { IUser } from '../../../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service'; // добавьте этот импорт
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [NgClass, FormsModule, ButtonModule, CheckboxModule, InputTextModule, HttpClientModule],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss'
})
export class PasswordChangeComponent {
  login: string = '';
  currentpassword: string = '';
  newpassword: string = '';
  repeatPassword: string = '';
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {
    // Получаем текущего пользователя из localStorage или сервиса
    const currentUser = this.userService.currUserValue;
    if (currentUser) {
      this.login = currentUser.login;
    }
  }

  ngOnInit(): void {}

  async onChangePassword(): Promise<void> {
    try {
      // Проверка совпадения нового пароля и подтверждения
      if (this.newpassword !== this.repeatPassword) {
        this.initToast('error', 'Новый пароль и подтверждение не совпадают');
        return;
      }

      // Получаем список пользователей
      const data: any = await this.userService.getUsers().toPromise();
      const users = data.users;

      // Находим текущего пользователя
      const currentUser = users.find((u: any) => u.login === this.login);
      
      if (!currentUser) {
        this.initToast('error', 'Пользователь не найден');
        return;
      }

      // Проверяем текущий пароль
      if (currentUser.password !== this.currentpassword) {
        this.initToast('error', 'Текущий пароль неверный');
        return;
      }

      // Обновляем пароль
      currentUser.password = this.newpassword;

      // Отправляем обновленные данные на сервер
      await this.userService.updateUsers({ users }).toPromise();

      this.initToast('success', 'Пароль успешно изменен');
      
      // Cброс формы
      this.currentpassword = '';
      this.newpassword = '';
      this.repeatPassword = '';

    } catch (error) {
      this.initToast('error', 'Ошибка при изменении пароля');
      console.error('Error changing password:', error);
    }
  }

  initToast(type: 'success' | 'error', text: string): void {
    this.messageService.add({ severity: type, detail: text, life: 3000 });
  }
}
