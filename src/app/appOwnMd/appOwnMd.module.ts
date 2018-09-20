import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppOwnMdRoutes } from './appOwnMd.routing';
import { AppOwnMdComponent } from './appOwnMd.component';
import { AppOwnMdFirstComponent } from './appOwnMdFirst/appOwnMdFirst.component';


@NgModule({
  imports: [
    AppOwnMdRoutes,
    // BrowserAnimationsModule,
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppOwnMdComponent,
    AppOwnMdFirstComponent],
  exports: [AppOwnMdComponent]
})

export class AppOwnMdModule { }
