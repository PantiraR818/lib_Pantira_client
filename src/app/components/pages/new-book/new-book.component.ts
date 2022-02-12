import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
    bookForm!: FormGroup;

  constructor(private book : BookService, private router : Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title : new FormControl(),
      author : new FormControl(),
      publisher : new FormControl(),
      price : new FormControl()
    });
  }

  addBook(){
    let book = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      publisher: this.bookForm.value.publisher,
      price: this.bookForm.value.price,
    };
    this.book.addBook(book).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/book"]);
    })
  }

}
