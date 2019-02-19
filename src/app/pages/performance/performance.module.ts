import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { NbDialogModule } from '@nebular/theme';
import { SmartTableDatePickerComponent } from '../../@theme/components/smart-table-date-picker-component/smart-table-date-picker.components';
import { PerformanceService } from './performance.service';
import { PerformanceDataComponent } from './performance-data.component';
import { PerformanceStarComponent } from './performance-star.component';
import { PerformanceMetricsComponent } from './performance-metrics.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forRoot()
  ],
  declarations: [
    PerformanceDataComponent,
    PerformanceMetricsComponent,
    PerformanceStarComponent
  ],
  entryComponents: [
  ],
  providers: [
    PerformanceService
  ]
})
export class PerformanceModule { }
