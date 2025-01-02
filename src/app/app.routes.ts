import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MusicaComponent} from './pages/musica/musica.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'musica', component: MusicaComponent}
];

