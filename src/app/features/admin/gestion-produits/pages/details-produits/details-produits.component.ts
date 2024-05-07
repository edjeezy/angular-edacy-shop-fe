import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleProduct } from '../../../../../shared/interfaces/produit';
import { ProduitsService } from '../../../../../shared/services/produits/produits.service';
import { delay, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrl: './details-produits.component.css'
})
export class DetailsProduitsComponent implements OnInit {
  currentId!: string | null;
  currentProduct!: SimpleProduct;
  constructor(
    private route: ActivatedRoute,
    private prodService: ProduitsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.currentId = map.get('id') as string;
      if (this.currentId) {
        this.init(this.currentId);
      }
    });
  }

  private async init(id: string) {
    this.currentProduct = await firstValueFrom(
      this.prodService.getProductById(id)
    ) as SimpleProduct;
  }
}
