import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  title: any;

  @Input() name: string;
  @Output() loaded: EventEmitter<null> = new EventEmitter<null>();
  @Output() destroyed: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
    this.loaded.emit();
  }

  ngOnDestroy() {
    this.destroyed.emit();
  }

}
