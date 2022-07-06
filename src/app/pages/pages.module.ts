import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule} from '../material/material.module'
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class PagesModule { }
