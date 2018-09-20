import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLibComponent } from './my-lib.component';
import { MyLibFirstComponent } from './my-lib-first/my-lib-first.component';
const routes: Routes = [
  { path: '',
    component: MyLibComponent,
    children: [
      {
        path: 'mylibfirst',
        component: MyLibFirstComponent
      },
      {
        path: '',
        redirectTo: 'mylibfirst',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLibRoutes {}
