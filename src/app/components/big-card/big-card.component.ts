import { Component, Input, OnInit } from '@angular/core';
import {Mensagem} from '../../model/mensagem.model';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  mensagem = this.getMensagens(dataFake,1);

  getMensagens(mensagem: any,tamanho:number) {
    const numeroItensAleatorios = Math.floor(Math.random() * Mensagem.length) + tamanho; // Número aleatório de itens entre 1 e o tamanho do array
    const copiaMensagem = [...mensagem]; // Cria uma cópia do array Mensagem
    const itensAleatorios = [];

    for (let i = 0; i < numeroItensAleatorios; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaMensagem.length);
      const itemAleatorio = copiaMensagem.splice(indiceAleatorio, 1)[0];
      itensAleatorios.push(itemAleatorio);
    }
    return itensAleatorios;
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
