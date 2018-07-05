import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs/Observable';
import { Category } from '../category';
 
@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    // styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnChanges {
 
    // our angular form
    update_product_form: FormGroup;
 
    @Output() show_read_products_event = new EventEmitter();
    @Input() product_id;
 
    categories: Category[];
 
    // initialize product & category services
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private formBuilder: FormBuilder
    ){
 
        // build angular form
        this.update_product_form = this.formBuilder.group({
            name: ["", Validators.required],
            price: ["", Validators.required],
            description: ["", Validators.required],
            category_id: ["", Validators.required]
        });
    }
 
    // user clicks 'create' button
    updateProduct(){
 
        // add product_id in the object so it can be updated
        this.update_product_form.value.id = this.product_id;
 
        // send data to server
        this.productService.updateProduct(this.update_product_form.value)
            .subscribe(
                 product => {
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
 
    // call the record when 'product_id' was changed
    ngOnChanges(){
 
        // read one product record
        this.productService.readOneProduct(this.product_id)
            .subscribe(product => {
 
                // put values in the form
                this.update_product_form.patchValue({
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    category_id: product.category_id
                });
            });
    }
 
    // read categories from database
    ngOnInit(){
        this.categoryService.readCategories()
            .subscribe(categories => this.categories=categories['records']);
    }
}
