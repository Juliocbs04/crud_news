import { Component } from '@angular/core';
import { Noticia } from '../model/noticia';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: Array<Noticia> = [];

  constructor(private navCtrl: NavController) {

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
  }

  async detalheNoticia(n: Noticia) {
    localStorage.setItem('detalheNoticia', JSON.stringify(n));
    this.navCtrl.navigateForward('detalhe-noticia');
  }

}
