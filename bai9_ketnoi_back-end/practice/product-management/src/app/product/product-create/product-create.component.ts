import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  submit() {
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Thêm thành công');
      });
    };
  }
