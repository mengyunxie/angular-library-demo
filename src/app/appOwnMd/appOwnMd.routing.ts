// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {  },
// ];

// export const AppOwnMdRoutes = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppOwnMdComponent } from './appOwnMd.component';
import { AppOwnMdFirstComponent } from './appOwnMdFirst/appOwnMdFirst.component';
const routes: Routes = [
  { path: '',
    component: AppOwnMdComponent,
    children: [
      {
        path: 'appmdfirst',
        component: AppOwnMdFirstComponent
      },
      {
        path: '',
        redirectTo: 'appmdfirst',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOwnMdRoutes {}
