import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KangenWaterComponent } from './kangen-water/kangen-water.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alkaline-water', component: KangenWaterComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }