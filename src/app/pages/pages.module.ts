import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';
import { PerformanceModule } from './performance/performance.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { AdminModule } from './admin/admin.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    SchoolModule,
    StudentModule,
    PerformanceModule,
    ECommerceModule,
    AdminModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
