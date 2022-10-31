import { RegistroComponent } from './components/registro/registro.component';
import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocationaltestComponent } from './components/dashboard/vocationaltest/vocationaltest.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login", component: RegistroComponent},
  {path:'Test',component:VocationaltestComponent},
  {path:'dashboard', loadChildren: () =>import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path:'**',redirectTo:'login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
