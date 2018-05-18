import { Component, OnInit, OnDestroy } from '@angular/core';


// import { UnidadeMedida } from '../../models/unidade-medida';
import { NgForm } from '@angular/forms';
import { IngredienteService } from '../../shared/ingrediente.service';


@Component({
  selector: 'app-cria-ingrediente',
  templateUrl: './cria-ingrediente.component.html',
  styleUrls: ['./cria-ingrediente.component.css']
})
export class CriaIngredienteComponent implements OnInit, OnDestroy {

  ing;
  ingredienteSubscribe;

  // esse = this.criaIngredienteService.ingrediente;
  constructor(private ingredienteService: IngredienteService) {
    this.fill();
  }

  ngOnInit() {
  }

  fill() {
    this.ing = this.ingredienteService.selectedIngrediente;
    console.log("oi!", this.ing);

    if (this.ing == undefined) {
      this.ing = {
        "id_ingrediente": null,
        "nome_ingrediente": "teste Criar Ingrediente",
        "id_unidade_medida": null,
        "aproveitamento_ingrediente": null,
        "quantidade_calorica_ingrediente": null
      }
    }
  }

  onSubmit(f: NgForm) {
    if (f.value.id_ingrediente == null) {
      this.ingredienteSubscribe = this.ingredienteService.postIngrediente(f.value).subscribe(data => console.log("post", f.value));
    } else {
      this.ingredienteSubscribe = this.ingredienteService.putIngrediente(f.value).subscribe(data => console.log("put", f.value));
    }
  }

  ngOnDestroy() {
    this.ingredienteSubscribe.unsubscribe();
  }



}
