import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable()

  checkTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.isDarkModeSubject.next(true);
    } else if (theme === 'light') {
      this.isDarkModeSubject.next(false);
    } else {
      localStorage.setItem('theme', 'dark');
      this.isDarkModeSubject.next(true);
    }
  }

  toggleDarkMode() {
    const currentMode = this.isDarkModeSubject.value;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    this.isDarkModeSubject.next(!currentMode);
  }
}