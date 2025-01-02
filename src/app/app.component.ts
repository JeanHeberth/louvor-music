import {Component} from '@angular/core';
import {MusicaComponent} from './pages/musica/musica.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './template/navbar/navbar.component';
import {FooterComponent} from './template/footer/footer.component';
import {SidebarComponent} from './template/sidebar/sidebar.component';
import {HomeComponent} from './pages/home/home.component';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'louvor-music';
}
