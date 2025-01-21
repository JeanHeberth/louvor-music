import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
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
