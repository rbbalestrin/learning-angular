<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
>>>>>>> a1c17de75bdf245250eabba5ceaff880400b8ea4

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
<<<<<<< HEAD
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
=======
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent],
})
export class AppComponent {
  private auth = inject(AuthService);

  isAdmin = computed(() => this.auth.activePermission() === 'admin');
>>>>>>> a1c17de75bdf245250eabba5ceaff880400b8ea4
}
