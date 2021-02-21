import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Comment } from "../../Models/comment";
import { User } from "../../Models/user";
import { Product } from '../../Models/product';
import { timeMessage, successDialog, errorMessage, warningMessage, deleteMessage } from '../../Functions/Alerts';
import { CommentService } from '../../Services/comment.service';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formG: FormGroup
  productsArray:Product[] = []
  commentsArray:Comment[] = []
  usersArray:User[] = []

  constructor(private formBuilder:FormBuilder, private commentService:CommentService, private productService:ProductService,
    private userService:AuthService, private router:Router) {
    this.buildForm()
    // this.showComments(this.productSelected)
    this.show()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      comment: ['',[Validators.required, Validators.maxLength(100)]],
      product: ['',[Validators.required]],
      // user: ['',[Validators.required]],
    })
  }

  ValidateErrorTextField(tf:string){
    return (this.formG.get(tf).errors && this.formG.get(tf).touched)
  }

  ValidateTextField(tf:string){
    return (this.formG.get(tf).invalid && this.formG.get(tf).touched)
  }

  userSelected: User = new User()
  productSelected: Product = new Product()
  commentSelected: Comment = new Comment()

  createOrUpdate(){
    if (this.formG.valid){ // verifica las validaciones de los campos
      if (this.commentSelected.id == 0) { // agregar commento Nuevo
        this.commentSelected.user = 3
        // this.commentSelected.product = 1
        this.commentService.add(this.commentSelected).subscribe(() => {
          timeMessage('Registrando Commento...',500).then(() => {
            successDialog('Commento registrado')
            // this.showComments(this.productSelected)
            this.showCo()
          })
        })        
      }else { // editar comment seleccionado
        this.commentService.update(this.commentSelected).subscribe((o:any) => {
          successDialog('Comentario Actualizado')
        }, error => {
          console.log(error)
          errorMessage('Ocurrio algun problema, intenta de nuevo')
        })
        errorMessage('Ocurrio algun problema, intenta de nuevo')
      }
      this.buildForm()
      this.commentSelected = new Comment()
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  // COMENTARIOS
  // showComments(product:Product){
  //   this.commentService.showCommentsByProduct(product.id).subscribe((o:any) => {
  //     this.commentsArray = o
  //   })
  // }

  showCo(){
    this.commentService.show().subscribe((o:any) => {
      this.commentsArray = o
    })
  }

  update(comment:Comment){
    this.commentSelected = comment
  }

  delete(comment:Comment){
    successDialog('Comentario Eliminado').then(() => {
      this.commentService.delete(comment.id).subscribe(() => {
        this.show()
      })
    })
    // deleteMessage(comment.comment).then(() => {
    //   if (Swal.clickConfirm){
    //     this.service.delete(comment.id).subscribe(() => {
    //       this.show()
    //     })
    //   }
    // })
  }

  // PRODUCTOS
  showProducts(){
    this.productService.show().subscribe((o:any) => {
      this.productsArray = o
    })
  }

  // USUARIOS
  showUsers(){
    this.userService.show().subscribe((o:any) => {
      this.usersArray = o
    })
  }

  // MOSTRAR TODO
  show(){
    this.showProducts()
    this.showCo()
    // this.showComments()
    // this.showUsers()
  }

}
