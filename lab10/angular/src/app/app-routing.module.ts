import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
const routes: Routes = [
  {path: 'addproduct',component: AddproductComponent},
  {path: 'showproducts', component: ShowproductsComponent},
  {
    path: '',
    redirectTo: 'showproducts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
