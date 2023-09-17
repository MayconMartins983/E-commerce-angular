import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
declare var $: any; 

// Seu código que usa jQuery aqui


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('carrinhoModal', { static: false }) carrinhoModal!: ElementRef;

  constructor(private renderer: Renderer2) {}
}
