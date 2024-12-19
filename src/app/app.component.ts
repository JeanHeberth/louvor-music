import {Component} from '@angular/core';
import {MusicaComponent} from './musica/musica.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MusicaComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'louvor-music';
}
