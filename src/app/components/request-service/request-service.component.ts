// resquest service.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-request-service',
  standalone: true,
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css'],
  imports: [CommonModule, MapComponent]
})
export class RequestServiceComponent {
  selectedCoordinates: { lat: number; lng: number } | null = null;
  showServiceMenu = true;
  services = ['Plumbing', 'Electricity', 'Carpentry', 'Cleaning'];

  constructor(private router: Router) {}

  onLocationSelected(coords: { lat: number; lng: number }) {
    this.selectedCoordinates = coords;
    this.showServiceMenu = false; // reset service menu in case user reselects location
  }

  onSelectServiceClick() {
    if (this.selectedCoordinates) {
      this.showServiceMenu = true;
    } else {
      alert('Please select a location by dragging the blue pin on the map.');
    }
  }

  onServiceSelected(service: string) {
    this.router.navigate(['/follow-up'], {
      queryParams: {
        lat: this.selectedCoordinates?.lat,
        lng: this.selectedCoordinates?.lng,
        service
      }
    });
  }
}
