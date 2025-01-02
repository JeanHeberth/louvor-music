import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MusicaInterface} from '../interface/MusicaInterface';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private readonly apiUrl = 'http://localhost:8088/api'; // Base URL da API

  constructor(private http: HttpClient) {}

  /**
   *
   * Obtém a lista de músicas.
   * @returns Observable contendo a lista de músicas.
   */
  getMusics(): Observable<MusicaInterface[]> {
    return this.http.get<MusicaInterface[]>(`${this.apiUrl}/findMusics`);
  }

  /**
   * Obtém uma música pelo UUID.
   * @param uuid UUID da música.
   * @returns Observable contendo os dados da música.
   */
  getMusicById(uuid: string): Observable<MusicaInterface> {
    return this.http.get<MusicaInterface>(`${this.apiUrl}/findMusics/${uuid}`);
  }

  /**
   * Adiciona uma nova música.
   * @param musica Dados da música a ser adicionada.
   * @returns Observable do resultado da operação.
   */
  addMusic(musica: Partial<MusicaInterface>): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveMusic`, musica);
  }

  /**
   * Atualiza uma música existente.
   * @param uuid UUID da música a ser atualizada.
   * @param musica Dados atualizados da música.
   * @returns Observable contendo a música atualizada.
   */
  editMusic(uuid: string, musica: Partial<MusicaInterface>): Observable<MusicaInterface> {
    return this.http.put<MusicaInterface>(`${this.apiUrl}/updateMusic/${uuid}`, musica);
  }

  /**
   * Remove uma música pelo UUID.
   * @param uuid UUID da música a ser removida.
   * @returns Observable do resultado da operação.
   */
  deleteMusic(uuid: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteMusic/${uuid}`);
  }
}
