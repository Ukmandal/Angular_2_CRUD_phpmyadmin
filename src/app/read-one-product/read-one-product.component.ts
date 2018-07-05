import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
// import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
 
@Component({
    selector: 'app-read-one-product',
    templateUrl: './read-one--product.component.html',
    // styleUrls: ['./read-one-product.component.css'],
})
 
export class ReadOneProductComponent implements OnChanges {
 
    /*
        @Output will tell the parent component (AppComponent)
        that an event has happened (via .emit(), see readProducts() method below)
    */
    @Output() show_read_products_event = new EventEmitter();
 
    // @Input means it will accept value from parent component (AppComponent)
    @Input() product_id;
 
    product: Product;
 
    // initialize product service
    constructor(private productService: ProductService){}
 
    // user clicks the 'read products' button
    readProducts(){
        this.show_read_products_event.emit({ title: "Read Products" });
    }
 
    // call the record when 'product_id' was changed
    ngOnChanges(){
        this.productService.readOneProduct(this.product_id)
            .subscribe(product => this.product=product);
    }
 
}
