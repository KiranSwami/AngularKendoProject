import { Component } from '@angular/core';
import { ProgressColor } from '@progress/kendo-angular-progressbar';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
})
export class ProgressbarComponent {
  public value = 5;
  public animation = false;
  public kpi = 'HCC';
  public colors = '#784BBB';

  public kpiData = [
    {
      name: 'Impatient only codes (IPO)',
      value: 10,
    },
    {
      name: 'Deleted CPT Codes',
      value: 5,
    },
    {
      name: 'Duplicates',
      value: 10,
    },
    {
      name: 'Broad Terms',
      value: 58,
    },
    {
      name: 'Missing CPT Codes',
      value: 15,
    },
  ];
}
