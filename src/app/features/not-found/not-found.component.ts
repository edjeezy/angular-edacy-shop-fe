import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  compteur3!: Observable<number>;
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

}
