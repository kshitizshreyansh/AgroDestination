import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
//import { ProductDescriptionComponent } from './product-description/product-description.component';
//import { AboutUsComponent } from './about-us/about-us.component';
import { LoginGuard } from './guards/login.guard';
import { FarmerComponent } from './farmer/farmer.component';
import { SupplierComponent } from './supplier/supplier.component';
//import { SignupComponent } from './signup/signup.component';
import { FarmingTipsComponent } from './farming-tips/farming-tips.component';
import { DispTipsComponent } from './disp-tips/disp-tips.component';
import { SellCropsComponent } from './sell-crops/sell-crops.component';
import { ViewcroprequestComponent } from './viewcroprequest/viewcroprequest.component';
import { SupplierrequestComponent } from './supplierrequest/supplierrequest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
//import { PaymentComponent } from './payment/payment.component';
//import { SecurityComponent } from './security/security.component';
//import { ReturnComponent } from './return/return.component';
//import { TermsComponent } from './terms/terms.component';
//import { PrivacyComponent } from './privacy/privacy.component';
//import { CartComponent } from './cart/cart.component';
//import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'farmer/:name', component: FarmerComponent},
  {path: 'supplier/:name', component: SupplierComponent},
  //{path: 'signup', component: SignupComponent},
  {path: 'farmingtips', component: FarmingTipsComponent},
  {path: 'disp-tips', component: DispTipsComponent},
  {path: 'sellcrops', component: SellCropsComponent},
  {path: 'supplierrequest', component: SupplierrequestComponent},
  {path: 'viewcroprequest', component: ViewcroprequestComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  //{path: 'dashboard/:name', component: DashboardComponent,canActivate:[LoginGuard]},
  {path: 'admin', component:AdminComponent,canActivate:[LoginGuard]},
  {path: 'farmer', component: FarmerComponent},
  //{path: 'adminpanel', component: AdminComponent},
  //{path: 'productDescription/:productID', component:ProductDescriptionComponent,canActivate:[LoginGuard]},
 // {path: 'aboutUs', component:AboutUsComponent},
  //{path: 'payment', component:PaymentComponent},
  //{path: 'security', component:SecurityComponent},
  //{path: 'return', component:ReturnComponent},
  //{path: 'terms', component:TermsComponent},
  //{path: 'privacy', component:PrivacyComponent},
  //{path: 'cart', component:CartComponent},
  //{path:'contact',component:ContactUsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard]
})
export class AppRoutingModule { }
