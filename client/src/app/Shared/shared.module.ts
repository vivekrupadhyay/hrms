import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { LoadingComponent } from './loading/loading.component';
import { TosterComponent } from './toster/toster.component';

@NgModule({
  declarations: [LoadingComponent, SuccessDialogComponent, ErrorDialogComponent, NotFoundComponent, ServerErrorComponent, LoadingComponent, TosterComponent],
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule
  ],
  exports: [
    CommonModule, MaterialModule, FlexLayoutModule
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ],

})
export class SharedModule { }
