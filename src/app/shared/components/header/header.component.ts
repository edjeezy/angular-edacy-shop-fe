import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { CrudService } from '../../services/crud/crud.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../interfaces/endpoints-enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @ViewChild('menuBtn') menuBtn!: any;
  @Output() menuClick = new EventEmitter()
  menu$ !: Observable<any[]>;
  constructor(
    private auth: AuthService,
    private crud: CrudService,
  
  ) {}

  ngOnInit() {
    this.menu$ = this.crud.getAll(ENDPOINT.CATEGUORIES)
  }

  logout() {
    this.auth.logout();
  }

  emitBurgerClick() {
    this.menuClick.emit();
  }

}
