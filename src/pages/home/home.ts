import { Post } from './../../post';
import { Pagina2Page } from './../pagina2/pagina2';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ServiciosProvider } from '../../providers/servicios/servicios';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	post: Observable<Post[]>;

	constructor(public navCtrl: NavController, public servicio: ServiciosProvider) {
		this.post = servicio.getPost();
	}

	/**
	 * Metodo para enviar un objeto completo a la segunda pantalla
	 * ademas de llamar a la segunda pantalla
	 * @param post Objeto que se le manda a la segunda pantalla
	 */
	detalle(post: Post): void {
		this.navCtrl.push('Pagina2Page', { p: post });
	}
}
