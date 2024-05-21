import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud/crud.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/interfaces/endpoints-enum';

@Component({
  selector: 'app-landing-faq',
  templateUrl: './landing-faq.component.html',
  styleUrl: './landing-faq.component.css'
})
export class LandingFaqComponent implements OnInit {
  faq$ !: Observable<any[]>
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.faq$ = this.crud.getAll(ENDPOINT.FAQ);
  }

  
}
