import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../../model/mensagem.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  mensagem: Mensagem[] = [
    {
      photo:
        'https://clashroyale.com/uploaded-images-blog/_720xAUTO_crop_center-center_90/309969377_1680248423.jpg?mtime=20230331074023',
      title: 'Megaestratégia na Rota das Lendas!',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.',
    },
    {
      photo:
        'https://clashroyale.com/uploaded-images-blog/_720xAUTO_crop_center-center_90/309969377_1680248423.jpg?mtime=20230331074023',
      title: 'Mudanças no preço do Pass Royale',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.',
    },
    {
      photo:
        'https://clashroyale.com/uploaded-images-blog/_407x228_crop_center-center_90/158142535_1679606679.jpg?mtime=20230323212439',
      title: 'Uma atualização para perdedores!',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.',
    },
    {
      photo:
        'https://clashroyale.com/uploaded-images-blog/_720xAUTO_crop_center-center_90/1085092973_1679050195.jpg?mtime=20230317104955',
      title: 'Prévia de Atualização: Fichas de Temporada e muito mais!',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.',
    },
    {
      photo:
        'https://clashroyale.com/uploaded-images-blog/_720xAUTO_crop_center-center_90/598133820_1674822039.jpg?mtime=20230127122039',
      title: 'A CLASH ROYALE LEAGUE está de volta!',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur culpa quo vero! Ratione, necessitatibus quis mollitia id accusamus fuga doloremque autem facilis officia veniam! Aliquam laborum tenetur optio exercitationem eligendi.',
    },
  ];

  mensagens = this.getMensagens(this.mensagem);

  getMensagens(mensagem: Mensagem[]) {
    const numeroItensAleatorios = Math.floor(Math.random() * Mensagem.length) + 1; // Número aleatório de itens entre 1 e o tamanho do array
    const copiaMensagem = [...mensagem]; // Cria uma cópia do array Mensagem
    const itensAleatorios = [];

    for (let i = 0; i < numeroItensAleatorios; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaMensagem.length);
      const itemAleatorio = copiaMensagem.splice(indiceAleatorio, 1)[0];
      itensAleatorios.push(itemAleatorio);
    }
    return itensAleatorios;
  }

  constructor() {}

  ngOnInit(): void {}
}
