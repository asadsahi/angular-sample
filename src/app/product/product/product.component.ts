import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CompanyService } from '../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {}

  get companyInfo() {
    return this.companyService.getCompanyInfo();
  }

  get products() {
    return this.productService.getProducts();
  }
}
