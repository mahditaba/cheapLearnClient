import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ThemeModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
  ],
})
export class RegisterModule { }
