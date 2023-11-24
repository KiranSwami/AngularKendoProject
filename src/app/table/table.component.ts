import { Component } from '@angular/core';
import { ProcedureData } from './model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  public gridData: ProcedureData[] = [
    {
      ClientProcedure: 'Procedure Example',
      IMOProcedure: 'IMO Procedure Example',
    },
    {
      ClientProcedure: 'Procedure Example',
      IMOProcedure: 'IMO Procedure Example',
    },
    {
      ClientProcedure: 'Procedure Example',
      IMOProcedure: 'IMO Procedure Example',
    },
    {
      ClientProcedure: 'Procedure Example',
      IMOProcedure: 'IMO Procedure Example',
    },
    {
      ClientProcedure: 'Procedure Example',
      IMOProcedure: 'IMO Procedure Example'
    },
  ];
}
