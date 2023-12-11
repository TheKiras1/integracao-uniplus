import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadesComponent } from './pages/entidades/entidades.component';
import { ContasReceberComponent } from './pages/financeiro/contas-receber/contas-receber.component';
import { ContasPagarComponent } from './pages/financeiro/contas-pagar/contas-pagar.component';

const routes: Routes = [
  {path:'entidades', component:EntidadesComponent},
  {path:'contas-receber', component:ContasReceberComponent},
  {path:'contas-pagar', component:ContasPagarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
