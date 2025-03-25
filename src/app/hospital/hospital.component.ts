import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalCountService } from '../services/total-count.service';

interface Doctor {
  name: string;
  specialization: string;
}

interface Patient {
  name: string;
  illness: string;
}

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
  hospitalDoctors: Doctor[] = [
    { name: 'Dr. Smith', specialization: 'Cardiology' },
    { name: 'Dr. Johnson', specialization: 'Neurology' },
    { name: 'Dr. Williams', specialization: 'Pediatrics' }
  ];

  hospitalPatients: Patient[] = [
    { name: 'John Doe', illness: 'Hypertension' },
    { name: 'Jane Smith', illness: 'Migraine' },
    { name: 'Robert Brown', illness: 'Diabetes' }
  ];

  constructor(private totalCountService: TotalCountService) {}

   // Calculating the total count of doctors and patients
  get totalCount(): number {
    return this.totalCountService.calculateTotal( // use calculateTotal method from TotalCountService
      this.hospitalDoctors.length,
      this.hospitalPatients.length
    );
  }
}
