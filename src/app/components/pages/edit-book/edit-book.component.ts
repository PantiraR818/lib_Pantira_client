import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm!: FormGroup;
  id : any;
  currentBook : any;
  constructor(private book : BookService, private router : Router, private activatedRouter : ActivatedRoute ) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title : new FormControl(),
      author : new FormControl(),
      publisher : new FormControl(),
      price : new FormControl()
    });
    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });
    this.book.getBookById(this.id).subscribe((res)=>{
      this.currentBook= res.data;
      this.bookForm.controls['title'].setValue(this.currentBook.title);
      this.bookForm.controls['author'].setValue(this.currentBook.author);
      this.bookForm.controls['publisher'].setValue(this.currentBook.publisher);
      this.bookForm.controls['price'].setValue(this.currentBook.price);
      
    });
  }

  editBook(){
    let book = {
      title : this.bookForm.value.title, 
      author : this.bookForm.value.author, 
      publisher : this.bookForm.value.publisher, 
      price : this.bookForm.value.price, 
    };
    this.book.updateBook(this.id,book).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/book"]);
    })
  }
}
