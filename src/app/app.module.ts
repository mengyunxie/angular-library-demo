import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AppOwnCp1Component } from './appOwnCp1/appOwnCp1.component';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      AppOwnCp1Component
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutes,
      NgZorroAntdModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [{ provide: NZ_I18N, useValue: zh_CN }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
