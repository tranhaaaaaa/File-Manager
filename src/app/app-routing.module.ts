import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('./pages/search/search.module').then(
            (m) => m.SearchModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/desktop/desktop.module').then(
            (m) => m.DesktopModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/adminstration/adminstration.module').then(
            (m) => m.AdminstrationModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/root-node/root-node.module').then(
            (m) => m.RootNodeModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
