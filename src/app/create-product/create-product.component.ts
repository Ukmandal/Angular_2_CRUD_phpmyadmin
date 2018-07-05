import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
import { Category } from '../category';
 
@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    // styleUrls: ['./create-product.component.css'],
})
 
// component for creating a product record
export class CreateProductComponent {
 
    // our angular form
    create_product_form: FormGroup;
 
    // @Output will tell the parent component (AppComponent) that an event happened in this component
    @Output() show_read_products_event = new EventEmitter();
 
    // list of categories
    categories: Category[];
 
    // initialize 'product service', 'category service' and 'form builder'
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        formBuilder: FormBuilder
    ){
        // based on our html form, build our angular form
        this.create_product_form = formBuilder.group({
            name: ["", Validators.required],
            price: ["", Validators.required],
            description: ["", Validators.required],
            category_id: ["", Validators.required]
        });
    }
 
    // user clicks 'create' button
    createProduct(){
        // send data to server
        this.productService.createProduct(this.create_product_form.value)
            .subscribe(
                 product => {
                    // show an alert to tell the user if product was created or not
                    console.log(product);
 
                    // go back to list of products
                    this.readProducts();
                 },
                 error => console.log(error)
             );
    }
 
    // user clicks the 'read products' button
    readProducts(){
        this.show_read_products_event.emit({ title: "Read Products" });
    }
 
    // what to do when this component were initialized
    ngOnInit(){
        // read categories from database
        this.categoryService.readCategories()
            .subscribe(categories => this.categories=categories['records']);
    }
}
