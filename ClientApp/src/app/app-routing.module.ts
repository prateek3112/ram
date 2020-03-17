import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { WebDevListComponent } from './category/web-dev-list/web-dev-list.component';
import { WebComponent } from './videos/web/web.component';
import { RegisterComponent} from './register/register.component';
//import { BusinessListComponent } from './category/business-list/business-list.component';
//import { GamingListComponent } from './category/gaming-list/gaming-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LogInComponent},
  {path: 'home', component: HomeComponent},
   {path: 'web-dev-list', component: WebDevListComponent},
  { path: 'register' , component : RegisterComponent},
  //{path: 'business-list', component: BusinessListComponent},
  //{path: 'gaming-list', component: GamingListComponent},
  {path: 'web', component: WebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
