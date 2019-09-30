import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  private usuario: Usuario = new Usuario();
  constructor(private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  async autenticarUsuario() {
    console.log('O nome é', this.usuario.nome);
    this.addMsg();
    this.updateLocalStorageUsuario();
  }

  async addMsg() {
    let toast = await this.toastCtrl.create({
      message: 'Usuário ' + this.usuario.nome + ' cadastrado!',
      duration: 3000,
      position: 'bottom',
    });
    await toast.present();
    return;
  }
  updateLocalStorageUsuario() {
    localStorage.setItem('usuarioDB', JSON.stringify(this.usuario));
  }

}
