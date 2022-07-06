import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomeComponent} from 'src/app/pages/home/home.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: HomeComponent  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
