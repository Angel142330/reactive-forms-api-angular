import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule,NgClass,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

private _apiService=inject(ApiService);
private _router=inject(Router);

productList:IProduct[] =[];

ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data:IProduct[])=>{
      this.productList=data;
    })
}

navegate(id:number):void{
  this._router.navigate(['/products', id]);

  
}




}
