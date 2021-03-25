import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './contests.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ContestsComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MaterialModule
  ]
})
export class ContestsModule { }
