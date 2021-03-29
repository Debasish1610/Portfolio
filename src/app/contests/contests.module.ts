import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './contests.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ContestsComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class ContestsModule { }
