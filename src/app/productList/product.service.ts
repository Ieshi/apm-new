import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IProduct } from "./product";
import { ProductListComponent } from "./product-list.component";

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    private productUrl = "api/productList/productList.json";

    constructor(private http:HttpClient){
        
    }

    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('ALL: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status},
             error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}

