Create a Product crud application

- Create product module
- Create product service with get Product in array
- Create product list componet, print all products from product service by injecting
- Create product component, which will print one product by taking product as Input from product list component
- app-product will contain methods to delete product, which will emit event to app-product-list to remove product from product service products array
- app-product-list will have an input to take product name and will create a new product with last id in products array + 1 
- app-product-list will have an update method which will 

<app-product-list>
    <app-product-item *ngFor="let product of products" [product]="product" (delete)="onDelete($event)" (update)="onUpdate($event)">
    </app-product-item>
</app-product-list>