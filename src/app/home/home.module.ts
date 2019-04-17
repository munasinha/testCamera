import { Comp2Component } from './../comp2/comp2.component';
import { Comp1Component } from './../comp1/comp1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "imageSrc": "assets/images/music.svg",
    }),
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, Comp1Component, Comp2Component]
})
export class HomePageModule {}
