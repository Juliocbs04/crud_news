import { Component, OnInit } from '@angular/core';
import { Noticia } from '../model/noticia';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-detalhe-noticia',
  templateUrl: './detalhe-noticia.page.html',
  styleUrls: ['./detalhe-noticia.page.scss'],
})
export class DetalheNoticiaPage implements OnInit {

  
  private noticia: Noticia;
  private user: Usuario;

  constructor() {
    let noticiaJSON = localStorage.getItem('noticiaDetalheDB');
    if (noticiaJSON != null) {
      let obj = JSON.parse(noticiaJSON);
      // tslint:disable-next-line: max-line-length
      this.noticia = new Noticia(obj._numero, obj._titulo, obj._dataPublicacao, 
        obj._publicadorPor, obj._link, obj._conteudo);
      console.log('noticia criada');
    } else {
      this.noticia = new Noticia();
    }

    //Lendo local storage do Usuário
    let usuarioJSON = localStorage.getItem('usuarioDB');
    if (usuarioJSON != null) {
      let obj  = JSON.parse(usuarioJSON);
      this.user= new Usuario(obj._nome, obj._login,obj._senha);
    }else{
      this.user= new Usuario();
    }
  }

  ngOnInit() {
  }

   /**
     * Getter $noticia
     * @return {Noticia}
     */
	public get $noticia(): Noticia {
		return this.noticia;
	}

    /**
     * Setter $noticia
     * @param {Noticia} value
     */
	public set $noticia(value: Noticia) {
		this.noticia = value;
  }
  
   /**
     * Getter $user
     * @return {Usuario}
     */
	public get $user(): Usuario {
		return this.user;
	}

    /**
     * Setter $user
     * @param {Usuario} value
     */
	public set $user(value: Usuario) {
		this.user = value;
	}

}
