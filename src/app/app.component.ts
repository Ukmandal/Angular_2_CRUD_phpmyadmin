import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    title = "Read Products";
    product_id;

    show_read_products_html = true;
    show_create_product_html = false;
    show_read_one_product_html = false;
    show_update_product_html = false;
    show_delete_product_html = false;

    showCreateProduct($event) {

        this.title = $event.title;

        this.hideAll_Html();
        this.show_create_product_html = true;
    }

    showReadOneProduct($event) {

        this.title = $event.title;
        this.product_id = $event.product_id;

        this.hideAll_Html();
        this.show_read_one_product_html = true;
    }

    showDeleteProduct($event) {

        this.title = $event.title;
        this.product_id = $event.product_id;

        this.hideAll_Html();
        this.show_delete_product_html = true;
    }

    showUpdateProduct($event) {

        this.title = $event.title;
        this.product_id = $event.product_id;

        this.hideAll_Html();
        this.show_update_product_html = true;
    }

    showReadProducts($event) {
        this.title = $event.title;

        this.hideAll_Html();
        this.show_read_products_html = true;
    }

    hideAll_Html() {
        this.show_read_products_html = false;
        this.show_read_one_product_html = false;
        this.show_create_product_html = false;
        this.show_update_product_html = false;
        this.show_delete_product_html = false;
    }
}