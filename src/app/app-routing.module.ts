import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component'; 
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
const routes: Routes = [
  {path:"produits", component: ProduitsComponent},
  {path:"addproduits", component: AddProduitComponent, canActivate:[ProduitGuard]},
  {path:"", redirectTo:"produits",pathMatch:"full"},
  {path :"updateProduit/:id",component: UpdateProduitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
