import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import { SportsComponent } from './sports/sports.component';
import { AdminComponent } from './admin/admin.component';
import { AuthInterceptor } from './login/auth-interceptor';
import { FarmerComponent } from './farmer/farmer.component';
import { SupplierComponent } from './supplier/supplier.component';
//import { SignupComponent } from './signup/signup.component';
import { CropCardComponent } from './crop-card/crop-card.component';
import { DisplaypostComponent } from './displaypost/displaypost.component';
import { FarmingTipsComponent } from './farming-tips/farming-tips.component';
import { DispTipsComponent } from './disp-tips/disp-tips.component';
import { SellCropsComponent } from './sell-crops/sell-crops.component';
import { DispSellCropComponent } from './disp-sell-crop/disp-sell-crop.component';
import { ViewcroprequestComponent } from './viewcroprequest/viewcroprequest.component';
import { SupplierrequestComponent } from './supplierrequest/supplierrequest.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CaserolComponent } from './caserol/caserol.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    //NavBarComponent,
    LoginComponent,
    //ItemDropdownComponent,
    //CarouselComponent,
    //FooterComponent,
    //DashboardComponent,
    //ElectronicsComponent,
    //SportsComponent,
    AdminComponent,
    FarmerComponent,
    SupplierComponent,
    //SignupComponent,
    CropCardComponent,
    DisplaypostComponent,
    FarmingTipsComponent,
    DispTipsComponent,
    SellCropsComponent,
    DispSellCropComponent,
    ViewcroprequestComponent,
    SupplierrequestComponent,
    NavbarComponent,
    AboutusComponent,
    CaserolComponent,
    ContactusComponent,
    FooterComponent,
    //ClothingComponent,
    //ProductCardComponent,
    //ProductDescriptionComponent,
    //AboutUsComponent,
    //PaymentComponent,
    //SecurityComponent,
    //ReturnComponent,
    //TermsComponent,
    //PrivacyComponent,
    //CartComponent,
    //ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
