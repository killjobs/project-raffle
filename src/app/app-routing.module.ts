import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'participantes',pathMatch:'full', component:ParticipantesComponent},
  {path:'**',pathMatch:'full', component:HomeComponent}
];

@NgModule({
  imports: [
            RouterModule.forRoot(routes),
            MatSidenavModule
           ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
