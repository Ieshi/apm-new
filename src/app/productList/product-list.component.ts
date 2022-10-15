import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

import { Subscription } from "rxjs";

@Component ({
        selector: 'pm-productList',
        templateUrl: './product-list.component.html',
        //providers: [ProductService],
        styleUrls: ['./product-list.component.css']
    }
)

export class ProductListComponent implements OnInit, OnDestroy{
    title = "Procuct list component";

    private _listFilter = "";


    showImage = false;


    imageWidth = 50;
    imageMargin = 2;
    
    productList: IProduct[] = [];
      
    filteredPoductList : IProduct[]= [];

    errorMessage: string = "";
    sub!: Subscription;

    constructor(private productService: ProductService){}

      toggleShowImage(): void{
        this.showImage = !this.showImage;
      }

      ngOnInit(): void {
        console.log("In on Init");
        this._listFilter = '';
        this.sub = this.productService.getProducts().subscribe({
            next: productList => {
                this.productList = productList;
                this.filteredPoductList = this.productList;
            },
            error: err => this.errorMessage = err
        });
        
      }

      ngOnDestroy(): void {
          console.log("In on Destroy");
          this.sub.unsubscribe();
      }

      get listFilter(): string {
        return this._listFilter;
      }

      set listFilter(value: string){
        this._listFilter = value;
        if(value.length != 0)
            this.filteredPoductList = this.performFilter(value);
        else
            this.filteredPoductList = this.productList;
      }

      performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.productList.filter((product : IProduct) => 
                product.productName.toLocaleLowerCase().includes(filterBy));
      }

      onRatingClicked(message:string):void {
        console.log('Rating clicked is: ' + message);
      }
}