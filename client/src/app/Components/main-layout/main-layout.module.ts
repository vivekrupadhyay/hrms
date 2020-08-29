import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../../Shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, AboutUsComponent, ContactUsComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule, SharedModule
  ]
})
export class MainLayoutModule { }
