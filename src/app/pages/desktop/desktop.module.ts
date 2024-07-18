import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxonomiComponent } from './taxonomi/taxonomi.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'taxonomi',
        component: TaxonomiComponent,
      }
    ]
  }
];
@NgModule({
  declarations: [
    TaxonomiComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class DesktopModule { }
