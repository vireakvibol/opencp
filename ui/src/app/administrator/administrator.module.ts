import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    LayoutModule
  ]
})
export class AdministratorModule { }
