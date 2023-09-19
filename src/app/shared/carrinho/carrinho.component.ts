import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IProduto } from '../models/IProduto';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  mostrarCarrinho: any = false;

  constructor(
    private renderer: Renderer2,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.stateService.cartObservable$.subscribe(e => {
      this.mostrarCarrinho = e;
    });
    const toggleButton = this.renderer.selectRootElement('.toggle-button');
    const menuLateral = this.renderer.selectRootElement('.menu-lateral');

    this.renderer.listen(toggleButton, 'click', () => {
      this.renderer.addClass(menuLateral, 'show');
    });
  }

  mostrarCart() {
    this.mostrarCarrinho = !this.mostrarCarrinho;
  }

  produtos: IProduto[] = [
    {
      nome: 'Nome 1',
      descricao:
        'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
      preco: 25.0,
      srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
    },
    {
      nome: 'Nome 2',
      descricao:
        'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
      preco: 25.0,
      srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
    },
    {
      nome: 'Nome 3',
      descricao:
        'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
      preco: 25.0,
      srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
    },
    {
      nome: 'Nome 4',
      descricao:
        'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
      preco: 25.0,
      srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
    },
  ];
}
