import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { ProfileInformationComponent } from '../../components/profileInformation.component';

@Component({
  selector: 'app-client-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    ProfileInformationComponent
  ],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  activeTab = 0;

  setTab(index: number) {
    this.activeTab = index;
  }
}
