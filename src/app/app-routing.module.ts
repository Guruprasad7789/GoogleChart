import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighChartComponent } from './high-chart/high-chart.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
