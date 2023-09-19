import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  cartBehavior = new BehaviorSubject<boolean>(false);
  cartObservable$ = this.cartBehavior.asObservable();

  addCartBehavior() {
    this.cartBehavior.next(!this.cartBehavior.value);
  }

  getValueCartBehavior(): boolean {
    return this.cartBehavior.value;
  }
}
