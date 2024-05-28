import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { ENDPOINT } from '../../../shared/interfaces/endpoints-enum';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, OnDestroy {
  menu$ !: Observable<any[]>;
  mobileQuery!: MediaQueryList;
  desktopQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;


  constructor(private crud: CrudService, public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.desktopQuery = media.matchMedia('(min-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.desktopQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.menu$ = this.crud.getAll(ENDPOINT.CATEGUORIES);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.desktopQuery.removeListener(this._mobileQueryListener);
  }
}
