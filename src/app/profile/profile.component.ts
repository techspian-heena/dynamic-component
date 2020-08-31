import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('sample', {  
    read: ViewContainerRef  
  }) sample: ViewContainerRef;

  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    const vcr = this.sample;
    this.profileService.isLoggedIn$
    .pipe(
      takeUntil(this.destroySubject),
      mergeMap(isLoggedIn =>
        this.profileService.loadComponent(vcr, isLoggedIn)
      )
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
