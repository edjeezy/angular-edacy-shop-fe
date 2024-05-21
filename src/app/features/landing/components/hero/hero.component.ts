import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud/crud.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/interfaces/endpoints-enum';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  landing$ !: Observable<any[]>;
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
      this.landing$ = this.crud.getAll(ENDPOINT.LANDING);
  }

  onLearnMoreClick() {
    
  }
}
