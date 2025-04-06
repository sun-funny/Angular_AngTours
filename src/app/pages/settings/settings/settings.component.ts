import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ISettings } from '../../../models/settings';
import { PasswordChangeComponent } from '../password-change/password-change/password-change.component';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TabsModule } from 'primeng/tabs';
import { StatisticsComponent } from '../statistics/statistics/statistics.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  imports: [ToastModule, TabsModule, StatisticsComponent, PasswordChangeComponent],
  providers: [MessageService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit, OnDestroy {

    ngOnInit(): void {  }
    ngOnDestroy(): void {  }
}
