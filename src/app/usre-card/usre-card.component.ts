import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-usre-card',
  templateUrl: './usre-card.component.html',
  styleUrls: ['./usre-card.component.scss']
})
export class UsreCardComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  logout() {
   this.profileService.logout();
  }

}
