import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';

@Injectable()

export class ProductService {

    constructor(private _http: Http) { }

    createProduct(product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(
            "http://localhost:8080/api/product/create.php", product, options)
            .map(res => res.json());
    }

    readProducts(): Observable<Product[]> {
        return this._http
            .get("http://localhost:8080/api/product/read.php")
            .map(res => res.json());
    }

    readOneProduct(product_id): Observable<Product> {
        return this._http
            .get("http://localhost:8080/api/product/read_one.php?id=" + product_id)
            .map(res => res.json());
    }

    deleteProduct(product_id) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(
            "http://localhost:8080/api/product/delete.php",
            { id: product_id },
            options
        ).map(res => res.json());
    }

    updateProduct(product): Observable<Product> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(
            "http://localhost:8080/api/product/update.php",
            product,
            options
        ).map(res => res.json());
    }
}