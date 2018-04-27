import { Post } from './../../post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
	url = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) {}

	/**
	 * Metodo que retorna un arreglo de objetos de una url que contine json
	 */
	getPost() {
		return this.http.get<Post[]>(this.url);
	}
}
