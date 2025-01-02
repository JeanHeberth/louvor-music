import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowRight, faCheckSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatFormField,
    MatCardHeader,
    FormsModule,
    MatLabel,
    MatError,
    NgIf,
    MatInput,
    MatCardActions
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };


  onSubmit() {
    if (this.loginData.username && this.loginData.password) {
      console.log('Login realizado com sucesso:', this.loginData);
      // Adicione a lógica de autenticação aqui
    }
  }

  onRegister() {
    console.log('Navegar para a página de registro');
    // Adicione a lógica de navegação para registro
  }

  onForgotPassword() {
    console.log('Navegar para a página de recuperação de senha');
    // Adicione a lógica de navegação para recuperação de senha
  }

  protected readonly faArrowRight = faArrowRight;
}
