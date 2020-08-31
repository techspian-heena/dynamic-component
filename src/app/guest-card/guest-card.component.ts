import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.scss']
})
export class GuestCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

 /* login() {
    this.profileService.login();
  }*/



}
