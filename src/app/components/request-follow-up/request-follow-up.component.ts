// ✅ request-follow-up.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf
import { MapComponent } from "../map/map.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-request-follow-up',
  standalone: true, // ✅ ensure it's marked standalone
  templateUrl: './request-follow-up.component.html',
  styleUrls: ['./request-follow-up.component.css'],
  imports: [         // ✅ ACTUALLY USE CommonModule here
    CommonModule,
    MapComponent,
    NavbarComponent
  ]
})
export class RequestFollowUpComponent implements OnInit {
  serviceProvider = {
    name: 'Anas Ahmed',
    phone: '+20 101 234 5678',
    rating: 4.8
  };

  requestStatus: 'pending' | 'onTheWay' | 'working' | 'completed' = 'onTheWay';

  customerLocation: L.LatLng = new L.LatLng(0, 0);
  serviceName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const lat = +params['lat'] || 0;
      const lng = +params['lng'] || 0;
      this.customerLocation = new L.LatLng(lat, lng);
      this.serviceName = params['service'] || 'General Service';
    });
  }

  cancelRequest(): void {
    alert('Request cancelled');
  }
}
