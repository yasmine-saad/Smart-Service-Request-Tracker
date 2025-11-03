import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedLocation = new BehaviorSubject<[number, number]>([0, 0]);
  private selectedService = new BehaviorSubject<string>('Unknown');

  selectedLocation$ = this.selectedLocation.asObservable();
  selectedService$ = this.selectedService.asObservable();

  setLocation(lat: number, lng: number): void {
    this.selectedLocation.next([lat, lng]);
  }

  setService(service: string): void {
    this.selectedService.next(service);
  }
}
