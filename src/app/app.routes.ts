import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MusicaComponent} from './pages/musica/musica.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'musica', component: MusicaComponent},
  {path: 'login', component: LoginComponent}
];

