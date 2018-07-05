import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';

@Component({
    selector: 'app-read-products',
    templateUrl: './read-products.component.html',
    styleUrls: ['./read-products.component.scss'],
})

export class ReadProductsComponent implements OnInit {

    // store list of products
    products: Product[];
    /*
       * Needed to notify the 'consumer of this component', which is the 'AppComponent',
         that an 'event' happened in this component.
   */
    @Output() show_create_product_event = new EventEmitter();
    @Output() show_read_one_product_event = new EventEmitter();
    @Output() show_update_product_event = new EventEmitter();
    @Output() show_delete_product_event = new EventEmitter();    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private productService: ProductService) { }

    // methods that we will use later
    // when user clicks the 'create' button
    createProduct() {
        // tell the parent component (AppComponent)
        this.show_create_product_event.emit({
            title: "Create Product"
        });
    }
    // when user clicks the 'read' button
    readOneProduct(id) {
        console.log('rp comp readOneProduct');
        // tell the parent component (AppComponent)
        this.show_read_one_product_event.emit({
            product_id: id,
            title: "Read One Product"
        });
    }
    // when user clicks the 'update' button
    updateProduct(id) {
        // tell the parent component (AppComponent)
        this.show_update_product_event.emit({
            product_id: id,
            title: "Update Product"
        });
    }

    // when user clicks the 'delete' button
    deleteProduct(id) {
        // tell the parent component (AppComponent)
        this.show_delete_product_event.emit({
            product_id: id,
            title: "Delete Product"
        });
    }
    // Read products from API.
    ngOnInit() {
        this.productService.readProducts()
            .subscribe(products =>
                this.products = products['records']
            );
    }
}
