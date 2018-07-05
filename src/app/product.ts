export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string,
        public category_id: number,
        public category_name: string
    ){}
}