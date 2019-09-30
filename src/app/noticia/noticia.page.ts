import { Component, OnInit } from '@angular/core';
import { AlertController, NumericValueAccessor, NavController } from '@ionic/angular';
import { Noticia } from '../model/noticia';
import { DatePipe } from '@angular/common';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  news: Array<Noticia> = [];
  private user: Usuario = new Usuario();

  constructor(private alertCtrl: AlertController, public datepipe: DatePipe, private navCtrl: NavController) {
    let noticiasJSON = localStorage.getItem('noticiaDB');
    if(noticiasJSON != null) {
      let objs  = JSON.parse(noticiasJSON);
      for (let index = 0; index < objs.length; index++) {
        let elemento = objs[index];
        let n : Noticia = new Noticia(
          elemento._numero, elemento._titulo, elemento._dataPublicacao, elemento._publicadoPor, elemento._link, elemento._conteudo
        );
        this.news.push(n);
      }
    }

    let usuarioJSON = localStorage.getItem('usuarioDB');
    if (usuarioJSON != null) {
      let obj  = JSON.parse(usuarioJSON);
      this.user= new Usuario(obj._nome,obj._login,obj._senha);
    }else{
      this.user= new Usuario();
    }

  }


  ngOnInit() {
  }

  /**
     * Getter $user
     * @return {Usuario }
     */
	public get $user(): Usuario  {
		return this.user;
	}

    /**
     * Setter $user
     * @param {Usuario } value
     */
	public set $user(value: Usuario ) {
		this.user = value;
	}
  async addNoticias(n?: Noticia, editar?: boolean) {
    let alert = await this.alertCtrl.create({
      header: 'Cadastro das notícias',
      inputs: [{
        name: 'numero',
        type: 'number',
        placeholder: 'Digite o número da notícia'
      },
      {
        name: 'titulo',
        type: 'text',
        placeholder: 'Digite o título da notícia'
      },
      {
        name: 'publicadorPor',
        type: 'text',
        placeholder: 'Publicado por: '
      },
      {
        name: 'data',
        type: 'date'
      },
      {
        name: 'link',
        type: 'text',
        placeholder: 'Insira o link da imagem'
      },
      {
        name: 'conteudo',
        type: 'text',
        placeholder: 'Digite o conteúdo da notícia',
      },
      ],

      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Operação cancelada pelo usuário!');
        }
      },
      {
        text: 'Cadastrar',
        handler: (form) => {
          if (editar) {
            this.deletarNoticia(n);
          }
          let data_formatada = this.datepipe.transform(form.data, ' dd-MM-yyyy' );
          let noticias = new Noticia(form.numero, form.titulo, data_formatada, form.publicadoPor, form.link, form.conteudo );
          this.news.push(noticias);
          this.updateLocalStorageNoticias();
          console.log('Noticia cadastrada com sucesso!');
        }
      
      }]
    });
    await alert.present();
  }

  updateLocalStorageNoticias() {
    localStorage.setItem('noticiaDB', JSON.stringify(this.news));
  }
  deletarNoticia(n: Noticia) {
    this.news = this.news.filter(taskArray => n !== taskArray);
    this.updateLocalStorageNoticias();
    console.log('Noticia deletada com sucesso!');
  }

  editarNoticia(n: Noticia) {
    this.addNoticias(n,true);
  }

  async detalheNoticia(n: Noticia) {
    localStorage.setItem('noticiaDetalheDB', JSON.stringify(n));
    this.navCtrl.navigateForward('detalhe-noticia');
  }

}
