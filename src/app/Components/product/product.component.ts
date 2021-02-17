import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Product } from '../../Models/product';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formG: FormGroup
  formAddProduct = true

  productsArray:Product[] = [
    {id:1, product:"Pelota de Beisbol", price:90},
    {id:2, product:"Bat de Beibol", price:300},
  ]

  constructor(private formBuilder:FormBuilder, private productService:ProductService, private router:Router) {
    this.buildForm()
    this.productService.show().subscribe((p:any) => {
      this.productsArray = p
    })
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      product: ['',[Validators.required]],
      price: ['',[Validators.required]]
    })
  }

  ValidateErrorTextField(tf:string){
    return (this.formG.get(tf).errors && this.formG.get(tf).touched)
  }

  ValidateTextField(tf:string){
    return (this.formG.get(tf).invalid && this.formG.get(tf).touched)
  }

  // save(event: Event) {
  //   event.preventDefault()
  //   if (this.formG.valid){ // verifica las validaciones de los campos
  //     const value = this.formG.value;
  //     console.log(value);
  //   } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
  //     this.formG.markAllAsTouched()
  //   }
  // }

  selected: Product = new Product()

  create(){
    if (this.formG.valid){ // verifica las validaciones de los campos
      if (this.selected.id == 0) {
        this.selected.id = this.productsArray.length + 1
        this.productsArray.push(this.selected)
        
        this.selected = new Product() 
      }
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  update(product:Product){
    this.selected = product
  }

  delete(product:Product){
  }

}
