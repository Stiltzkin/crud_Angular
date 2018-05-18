import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';
import { Ingrediente } from '../models/ingrediente';

@Injectable()
export class IngredienteService {

  selectedIngrediente: Ingrediente;
  constructor(private http: HttpClient) { }

  getIngrediente() {
    return this.http.get(environment.apiPostIngrediente + "listall");
  }

  postIngrediente(ing: Ingrediente) {
    return this.http.post(environment.apiPostIngrediente, ing);
  }

  putIngrediente(ing: Ingrediente) {
    return this.http.post(environment.apiPutIngrediente + ing.id_ingrediente, ing);
  }

  deleteIngrediente(ing: Ingrediente) {
    return this.http.delete(environment.apiDeleteIngrediente + ing.id_ingrediente);
  }
}
