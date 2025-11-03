// ✅ map.component.ts
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true
})
export class MapComponent implements OnInit, OnChanges {
getMarkerLatLng(): L.LatLng|undefined {
throw new Error('Method not implemented.');
}
  private map!: L.Map;
  private marker!: L.Marker;

  @Input() readOnly: boolean = false; // Determines if the map is editable
  @Input() location?: L.LatLng;       // Sets an initial marker location
  @Output() locationSelected = new EventEmitter<L.LatLng>(); // Emits on marker drag (if not readOnly)

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.map && this.location) {
      this.updateMarkerPosition(this.location);
    }
  }

  private initMap(): void {
    const center = this.location ?? L.latLng(30.5852, 31.502); // Default to Egypt

    this.map = L.map('service-map').setView(center, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker(center, {
      draggable: !this.readOnly,
      icon: this.getCustomIcon()
    }).addTo(this.map);

    if (!this.readOnly) {
      this.marker.on('dragend', () => {
        const newLocation = this.marker.getLatLng();
        this.locationSelected.emit(newLocation);
      });
    }

    // Fix incomplete rendering issue
    setTimeout(() => this.map.invalidateSize(), 0);
  }

  private updateMarkerPosition(position: L.LatLng): void {
    if (this.marker) {
      this.marker.setLatLng(position);
      this.map.setView(position, this.map.getZoom());
    }
  }

  private getCustomIcon(): L.Icon {
    return L.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41]
    });
  }

  getCurrentMarkerLocation(): L.LatLng {
    return this.marker.getLatLng();
  }
}
