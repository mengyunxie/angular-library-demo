import { NgModule } from '@angular/core';
import { MyLibRoutes } from './my-lib.routing';
import { MyLibComponent } from './my-lib.component';
import { MyLibFirstComponent } from './my-lib-first/my-lib-first.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    MyLibRoutes,
    NgxEchartsModule
  ],
  declarations: [
    MyLibComponent,
    MyLibFirstComponent
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
