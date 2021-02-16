import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Comment } from "../../Models/comment";
import { User } from "../../Models/user";
import { Product } from '../../Models/product';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  formG: FormGroup
  formAddComment = true

  commentsArray:Comment[] = [
    {id:1, comment:"Este es un comentario parte 1", user:1, product:1, date:Date()},
    {id:2, comment:"Este es un comentario parte 2", user:2, product:4, date:Date()},
    {id:3, comment:"Este es un comentario parte 3", user:2, product:5, date:Date()},
  ]

  constructor(private formBuilder:FormBuilder) {
    this.buildForm()
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

  create(){
    if (this.formG.valid){ // verifica las validaciones de los campos
      console.log('que entro?')

      if (this.selected.id == 0) {
        this.selected.id = this.commentsArray.length + 1
        this.selected.date = Date()
        this.commentsArray.push(this.selected)
        console.log('ya')
        this.selected = new Comment() 
      }
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  update(comment:Comment){
    this.selected = comment

  }

  delete(comment:Comment){
  }

}
