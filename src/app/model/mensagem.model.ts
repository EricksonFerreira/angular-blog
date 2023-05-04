export class Mensagem {
  id: string | undefined;
  photo: string | undefined;
  title: string | undefined;
  description?: string | undefined;

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

}

