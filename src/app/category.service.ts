import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Category } from './category';
 
@Injectable()
 
export class CategoryService {
 
    constructor(private _http: Http) { }
 
    readCategories(): Observable<Category[]>{
        return this._http
        .get("http://localhost:8080/api/product/read.php")
        .map(res => res.json());    
    }
}