import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TableComponent } from './table/table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TopCardComponent } from './topcard/topcard.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProgressbarComponent,
    TopCardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    LabelModule,
    DropDownListModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    GridModule,
    LayoutModule,
    DropDownsModule,
  ],
})
export class AppModule {}
