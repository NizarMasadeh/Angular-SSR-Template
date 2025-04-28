import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ThemeToggleComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor() { }
}
