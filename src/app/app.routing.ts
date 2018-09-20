import { Routes, RouterModule } from '@angular/router';
// import {  MyLibModule } from 'my-lib';
// import {  UserLibModule } from 'user-lib';
import {  MyLibModule } from '../../projects/my-lib/src/public_api';
import {  UserLibModule } from '../../projects/user-lib/src/public_api';
import { AppOwnCp1Component } from './appOwnCp1/appOwnCp1.component';
import { AppOwnMdModule } from './appOwnMd/appOwnMd.module';

const routes: Routes = [
  {
    path: 'mylib',
    loadChildren: () => MyLibModule
  },
  {
    path: 'userlib',
    // loadChildren: 'user-lib/public_api#UserLibModule'
    loadChildren: () => UserLibModule
  },
  {
    path: 'appOwnCp1',
    component: AppOwnCp1Component
  },
  {
    path: 'appOwnMd',
    // loadChildren:() => System.import('./path/to/yourmodule').then(mod => mod.ModuleName)
    loadChildren: './appOwnMd/appOwnMd.module#AppOwnMdModule'
    // loadChildren: () => AppOwnMdModule
  },
  { path: '',   redirectTo: 'appOwnCp1', pathMatch: 'full' },
  { path: '**', component: AppOwnCp1Component }
];

export const AppRoutes = RouterModule.forRoot(routes);
