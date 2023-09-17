import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduto } from '../models/IProduto';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css'],
})
export class ProdutoDetalhesComponent {
  @Input() produto!: IProduto;
  quantity = 1;

  constructor(public activeModal: NgbActiveModal) {}

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    // Lógica para adicionar o produto ao carrinho com a quantidade selecionada
    console.log(
      'Produto adicionado ao carrinho:',
      this.produto,
      'Quantidade:',
      this.quantity
    );
    this.activeModal.close(); // Fecha o modal após adicionar ao carrinho
  }

  closeModal() {
    this.activeModal.close();
  }
}
