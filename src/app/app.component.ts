import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital/hospital.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HospitalComponent],
  template: '<app-hospital></app-hospital>'
})
export class AppComponent {
  title = 'hospital-app';
}