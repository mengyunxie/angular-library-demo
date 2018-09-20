import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserLibRoutes } from './user-lib.routing';
import { UserLibComponent } from './user-lib.component';
import { UserLibFirstComponent } from './user-lib-first/user-lib-first.component';
@NgModule({
  imports: [
    UserLibRoutes,
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserLibComponent,
    UserLibFirstComponent],
  exports: [UserLibComponent]
})
export class UserLibModule { }
