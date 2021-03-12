import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingModule } from './loading/loading.module';

import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { TosterComponent } from './toster/toster.component';
import { ToasterService } from './Common/services/toaster.service';
import { RepositoryService } from './Common/services/repository.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './common/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    NotFoundComponent,
    ServerErrorComponent,
    TosterComponent,
  ],
  imports: [CommonModule, MaterialModule, LoadingModule, FlexLayoutModule],
  exports: [CommonModule, MaterialModule, LoadingModule, FlexLayoutModule],
  entryComponents: [SuccessDialogComponent, ErrorDialogComponent],
  providers: [
    ToasterService,
    RepositoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
