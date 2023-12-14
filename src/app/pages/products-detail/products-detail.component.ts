import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{


  private _apiService=inject(ApiService);
  private _route=inject(ActivatedRoute);
  loading:boolean=true;
  color: string = '';
  product?:IProduct;


  ngOnInit(): void {
      this._route.params.subscribe(params =>{

        this._apiService.getProduct(params['id']).subscribe((data:IProduct) =>{
          this.loading=false;
          this.product=data;
          this.color = this.product?.price as number > 200 ? 'red' : ''
        })

      }) 
  }

}
