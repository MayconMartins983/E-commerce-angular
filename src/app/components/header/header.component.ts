import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
declare var $: any; 

// Seu código que usa jQuery aqui


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('carrinhoModal', { static: false }) carrinhoModal!: ElementRef;

  constructor(private renderer: Renderer2,
    private stateService: StateService) {}

  abrirCarrinho() {
    this.stateService.addCartBehavior();
  }
}
