import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from  "@angular/router";
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
		showLoading : boolean =false
productCreateForm: FormGroup;

constructor(private productService: ProductService, private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
 		this.productCreateForm = this.fb.group({ 
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required] }); 
  }

onSubmitProduct(){
  	this.showLoading = true;
  }
}
