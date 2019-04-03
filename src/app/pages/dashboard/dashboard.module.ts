import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
