import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SehirListComponent } from './sehir/sehir-list/sehir-list.component';
import { PersonelListComponent } from './personel/personel-list/personel-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'sehList', component: SehirListComponent},
  {path: 'perList', component: PersonelListComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
