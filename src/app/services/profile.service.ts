import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private isLoggedIn = new BehaviorSubject(true);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private cfr: ComponentFactoryResolver) { }

  login() {
    this.isLoggedIn.next(true);
  }

  logout() { 
    this.isLoggedIn.next(false);
  }

  async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    debugger;
    const { GuestCardComponent } = await import('../guest-card/guest-card.component');
    const { UsreCardComponent } = await import('../usre-card/usre-card.component');
    vcr.clear();
    let component = isLoggedIn ? UsreCardComponent : GuestCardComponent;
    return vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }
}
