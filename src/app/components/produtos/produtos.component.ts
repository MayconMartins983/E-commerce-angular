import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduto } from 'src/app/shared/models/IProduto';
import { ProdutoDetalhesComponent } from 'src/app/shared/produto-detalhes/produto-detalhes.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.produtos = [
      {
        nome: 'Nome 1',
        descricao: 'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
        preco: 25.0,
        srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
      },
      {
        nome: 'Nome 2',
        descricao: 'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
        preco: 25.0,
        srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
      },
      {
        nome: 'Nome 3',
        descricao: 'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
        preco: 25.0,
        srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
      },
      {
        nome: 'Nome 4',
        descricao: 'Este incrível [Nome do Produto] é uma escolha excepcional para quem busca qualidade e desempenho superiores. Projetado com precisão e atenção aos detalhes, este produto é a combinação perfeita de estilo e funcionalidade.',
        preco: 25.0,
        srcImg: '../../../assets/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
      },
    ];
  }

  openProduoDetailsModal(produto: IProduto) {
    const modalRef = this.modalService.open(ProdutoDetalhesComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.produto = produto;
  }
}
