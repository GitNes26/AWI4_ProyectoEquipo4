import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Comment } from "../../Models/comment";
import { User } from "../../Models/user";
import { Product } from '../../Models/product';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { timeMessage, successDialog, errorMessage, warningMessage, deleteMessage } from '../../Functions/Alerts';
import { CommentService } from '../../Services/comment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  formG: FormGroup
  formAddComment = true

  commentsArray:Comment[] = []

  constructor(private formBuilder:FormBuilder, private service:CommentService, private router:Router) {
    this.buildForm()
    this.show()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      comment: ['',[Validators.required, Validators.maxLength(100)]],
      user: ['',[Validators.required]],
      product: ['',[Validators.required]],
      // date: ['',[Validators.required]]
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

  selected: Comment = new Comment()

  createOrUpdate(){
    if (this.formG.valid){ // verifica las validaciones de los campos
      if (this.selected.id == 0) { // agregar commento Nuevo
        this.service.add(this.selected).subscribe(() => {
          timeMessage('Registrando Commento...',500).then(() => {
            successDialog('Commento registrado')
            // this.router.navigate(['comments'])
          })
        })
        this.show()
        
      }else { // editar comment seleccionado
        this.service.update(this.selected).subscribe((o:any) => {
          successDialog('Commento actualizado')
        }, error => {
          console.log(error)
          errorMessage('Commento ya existente')
        })
      }
      this.buildForm()
      this.selected = new Comment()
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  show(){
    this.service.show().subscribe((o:any) => {
      this.commentsArray = o
    })
  }

  update(comment:Comment){
    this.selected = comment
  }

  delete(comment:Comment){
    successDialog('Comentario Eliminado').then(() => {
      this.service.delete(comment.id).subscribe(() => {
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

}
