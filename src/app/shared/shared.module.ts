import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    // ... any shared components/pipes/directives
  ]
})
export class SharedModule {}
