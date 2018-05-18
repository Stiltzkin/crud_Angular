import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediente } from '../../models/ingrediente';
import { IngredienteService } from '../../shared/ingrediente.service';
import { CriaIngredienteComponent } from '../cria-ingrediente/cria-ingrediente.component';

@Component({
  selector: 'app-lista-ingrediente',
  templateUrl: './lista-ingrediente.component.html',
  styleUrls: ['./lista-ingrediente.component.css']
})
export class ListaIngredienteComponent implements OnInit, OnDestroy {

  ingredienteSubscribe;
  ingredientes;

  constructor(private ingredienteService: IngredienteService) { }

  ngOnInit() {
    this.ingredienteSubscribe = this.ingredienteService.getIngrediente().subscribe(dados => this.ingredientes = dados);
  }

  showForEdit(ing: Ingrediente) {
    this.ingredienteService.selectedIngrediente = Object.assign({}, ing);
  }

  onDelete(ing: Ingrediente) {
    if (confirm("Deletar " + ing.nome_ingrediente + " ?") == true) {
      this.ingredienteSubscribe = this.ingredienteService.deleteIngrediente(ing);
    }
  }

  ngOnDestroy() {
    this.ingredienteSubscribe.unsubscribe();
  }
}
