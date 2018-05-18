export class Ingrediente {
  constructor(
    public id_ingrediente: number,
    public nome_ingrediente: string,
    public aproveitamento_ingrediente: number,
    public id_unidade_medida: number,
    public quantidade_calorica_ingrediente: number) { }
}
