import {Component} from '@angular/core';
import {MusicaComponent} from './musica/musica.component';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './template/navbar/navbar.component';
import {FooterComponent} from './template/footer/footer.component';
import {SidebarComponent} from './template/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RouterOutlet,
    MusicaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'louvor-music';
}
