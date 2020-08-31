import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-loader';
  sampleComponents = [ Page1Component, Page2Component];

  name = 'Angular';
  childLoaded: boolean = false;
  componentRef: ComponentRef<Page1Component>;

  @ViewChild('sample', {  
    read: ViewContainerRef  
}) sample: ViewContainerRef;

constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

ngOnInit() {

}

loadComponent() {
  this.sample.clear();
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Page1Component);
  this.componentRef = this.sample.createComponent(componentFactory);
  (this.componentRef.instance).name = "Page1";
  (this.componentRef.instance as any).loaded.subscribe(() => {
    this.childLoaded = true;
  });
}

loadPage2() {
  this.sample.clear();
  let page2ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.sampleComponents[1]);
  let page2ComponentRef = this.sample.createComponent(page2ComponentFactory);
  (<Page2Component> page2ComponentRef.instance).title = "Page2";
}
}
