import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url: string = "http://claudiney.com";
  cursoAngular: boolean = true;
  urlImagem: string = "https://i.pinimg.com/236x/04/43/40/0443407d1834ee924063e0dc8362a842.jpg";

  valorAtual = '';
  valorSalvo = '';
  MouseOverOut: boolean = false;

  pessoa = {
    nome: "default",
    idade: 18   
  }

  nomeCurso = "Angular";


  getValor(): number{
    return 1;
  }

  getCurtirCurso(): boolean{
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.MouseOverOut = !this.MouseOverOut;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
