// ✅ navbar.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = 'Smart Service Tracker';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }
}
