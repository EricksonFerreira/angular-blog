import { Component, OnInit } from '@angular/core';
import {Mensagem} from '../../model/mensagem.model';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

    mensagem: Mensagem[] = [
    {
      photo: 'https://clashroyale.com/uploaded-images-blog/PT_Social_1024x576.jpg?mtime=20190415112248',
      title: 'ATUALIZAÇÃO DE ABRIL NO CLASH ROYALE',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.'
    },
    {
      photo: 'https://pbs.twimg.com/media/FPCE7rEXMAsBY0u.jpg:large',
      title: 'A ATUALIZAÇÃO DO MINEIRO',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.'
    },
    {
      photo: 'https://www.clashroyaledicas.com/wp-content/uploads/2021/03/sneak-peek-itens-magicos-clash-royale.jpg',
      title: 'NOVA ATUALIZAÇÃO MÁGICA',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.'
    },
  ];

  mensagemAleatoria = this.mensagem[Math.floor(Math.random() * this.mensagem.length)];

  constructor() {
  }

  ngOnInit(): void {
  }

}
