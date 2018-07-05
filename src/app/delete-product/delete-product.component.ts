import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
 
@Component({
    selector: 'app-delete-product',
    templateUrl: './delete-product.component.html',
    // styleUrls: ['./delete-product.component.css'],
})
 
export class DeleteProductComponent {
 
    /*
        @Output will tell the parent component (AppComponent)
        that an event has happened (via .emit(), see readProducts() method below)
    */
    @Output() show_read_products_event = new EventEmitter();
 
    // @Input enable getting the product_id from parent component (AppComponent)
    @Input() product_id;
 
    // initialize product service
    constructor(private productService: ProductService){}
 
    // user clicks 'yes' button
    deleteProduct(){
 
        // delete data from database
        this.productService.deleteProduct(this.product_id)
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
 
}
