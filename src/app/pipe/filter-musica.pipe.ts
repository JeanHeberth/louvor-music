import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMusica',
})
export class FilterMusicaPipe implements PipeTransform {
  transform(musicas: any[], filtro: string): any[] {
    if (!musicas || !filtro) return musicas;

    filtro = filtro.toLowerCase();

    return musicas.filter(
      (musica) =>
        musica.autor.toLowerCase().includes(filtro) ||
        musica.music.toLowerCase().includes(filtro)
    );
  }
}
