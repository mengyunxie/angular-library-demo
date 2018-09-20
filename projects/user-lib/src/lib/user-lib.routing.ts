import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLibComponent } from './user-lib.component';
import { UserLibFirstComponent } from './user-lib-first/user-lib-first.component';
const routes: Routes = [
  { path: '',
    component: UserLibComponent,
    children: [
      {
        path: 'userlibfirst',
        component: UserLibFirstComponent
      },
      {
        path: '',
        redirectTo: 'userlibfirst',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLibRoutes {}
