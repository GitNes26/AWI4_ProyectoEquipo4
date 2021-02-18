import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Product } from '../../Models/product';
import { ProductService } from '../../Services/product.service';
import { timeMessage, successDialog, errorMessage } from '../../Functions/Alerts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formG: FormGroup
  formAddProduct = true

  productsArray:Product[] = []

  constructor(private formBuilder:FormBuilder, private service:ProductService, private router:Router) {
    this.buildForm()
    this.show()
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
        
      }else {
        this.update(this.selected)
      }
      this.buildForm()
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  show(){
    this.service.show().subscribe((o:any) => {
      this.productsArray = o
    })
  }

  update(product:Product){
    this.selected = product
    if (this.selected.id != 0) {
      this.service.update(this.selected).subscribe((o:any) => {
        successDialog('Producto actualizado')
      }, error => {
        console.log(error)
        errorMessage('Producto ya existente')
      })
    }
    this.buildForm()
  }

  delete(product:Product){
  }

}
