import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootNodeComponent } from './root-node.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'root-node/:id',
    component: RootNodeComponent,
  },
];

@NgModule({
  declarations: [
    RootNodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Import RouterModule with routes for child routes
  ]
})
export class RootNodeModule { }
