import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';


@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
