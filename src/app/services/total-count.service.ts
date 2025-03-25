import { Injectable } from '@angular/core';
import { DoctorCountService } from './doctor-count.service';
import { PatientCountService } from './patient-count.service';

@Injectable({
  providedIn: 'root'
})
export class TotalCountService {
  constructor(
    private doctorCountService: DoctorCountService,
    private patientCountService: PatientCountService
  ) {}

  calculateTotal(doctorCount: number, patientCount: number): number {
    return doctorCount + patientCount;
  }
}