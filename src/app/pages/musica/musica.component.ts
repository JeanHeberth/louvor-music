import {Component} from '@angular/core';
import {MusicaService} from '../../service/musica.service';
import {MatDialog} from '@angular/material/dialog';
import {MusicEditPopupComponent} from '../music-edit-popup/music-edit-popup.component';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {FormsModule} from '@angular/forms';
import {NotificationComponent} from '../../notification/notification.component';
import {FilterMusicaPipe} from '../../pipe/filter-musica.pipe';
import {NgForOf, NgIf} from '@angular/common';
import {MusicaInterface} from '../../interface/MusicaInterface';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
  imports: [
    FormsModule,
    NotificationComponent,
    FilterMusicaPipe,
    NgForOf,
    NgIf
  ]
})
export class MusicaComponent {
  musica = { uuid: '', autor: '', versao: '', music: '' }; // Objeto temporário para adicionar música
  musicas: MusicaInterface[] = []; // Lista de músicas
  filtro: string = ''; // Filtro de busca
  notificationMessage: string = ''; // Mensagem de notificação
  notificationType: 'success' | 'error' = 'success'; // Tipo de notificação

  constructor(private musicaService: MusicaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getMusics();
  }

  /**
   * Exibe uma notificação para o usuário.
   */
  showNotification(message: string, type: 'success' | 'error'): void {
    this.notificationMessage = message;
    this.notificationType = type;

    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }

  /**
   * Obtém a lista de músicas cadastradas.
   */
  getMusics(): void {
    this.musicaService.getMusics().subscribe(
      (data) => (this.musicas = data),
      (error) => console.error('Erro ao buscar músicas:', error)
    );
  }

  /**
   * Adiciona uma nova música e limpa os campos após salvar.
   */
  addMusic(): void {
    if (!this.musica.autor || !this.musica.versao || !this.musica.music) {
      this.showNotification('Preencha todos os campos antes de salvar!', 'error');
      return;
    }

     // Criar um novo objeto sem o campo uuid
  const { uuid, ...musicaSemUuid } = this.musica;

  this.musicaService.addMusic(musicaSemUuid).subscribe(
    (savedMusic) => {
      this.musicas.push(savedMusic);
      this.getMusics();
        this.limparCampos();
        this.showNotification('Música adicionada com sucesso!', 'success');
      },
      () => this.showNotification('Erro ao adicionar música.', 'error')
    );
  }



  /**
   * Edita uma música existente.
   * @param music Música a ser editada.
   */
  editMusic(music: MusicaInterface): void {
    const dialogRef = this.dialog.open(MusicEditPopupComponent, {
      width: '500px',
      disableClose: true,
      data: { ...music },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.musicaService.editMusic(music.uuid, result).subscribe(
          () => {
            this.getMusics();
            this.showNotification('Música atualizada com sucesso!', 'success');
          },
          () => this.showNotification('Erro ao atualizar música.', 'error')
        );
      }
    });
  }


  /**
   * Remove uma música.
   * @param music Música a ser removida.
   */
  deleteMusic(music: MusicaInterface): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { message: music.music },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.musicaService.deleteMusic(music.uuid).subscribe(
          () => {
            this.getMusics();
            this.showNotification('Música excluída com sucesso!', 'success');
          },
          () => this.showNotification('Erro ao excluir música.', 'error')
        );
      }
    });
  }

  /**
   * Limpa os campos do formulário.
   */
  limparCampos(): void {
    this.musica = { uuid: '', autor: '', versao: '', music: '' };
  }
}
