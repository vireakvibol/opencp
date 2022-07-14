import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [MainSidebarComponent],
  imports: [CommonModule, NzLayoutModule, NzIconModule, NzMenuModule, NzBreadCrumbModule],
  exports: [MainSidebarComponent],
})
export class LayoutModule {}
