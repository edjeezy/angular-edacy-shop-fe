import { Component } from '@angular/core';
import { Observable } from 'rxjs';


export interface Service {
  id?: string,
  type: string,
  prix: number,
}

@Component({
  selector: 'app-gestion-services',
  templateUrl: './gestion-services.component.html',
  styleUrl: './gestion-services.component.css'
})
export class GestionServicesComponent {
  displayedColumns: string[] = [ 'type', 'prix', 'actions'];
  dataSource = [];
  services!: Observable<any[]>;
  pageSizeOptions = [5, 10, 20, 50];
  currentPage: number = 0;

}
