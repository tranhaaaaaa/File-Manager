import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminstrationModule } from './pages/adminstration/adminstration.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DesktopModule } from './pages/desktop/desktop.module';
import { RootNodeModule } from './pages/root-node/root-node.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminstrationModule,
    DashboardModule,
    DesktopModule,
    RootNodeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
