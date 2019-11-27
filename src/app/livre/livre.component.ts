import { Component, OnInit } from '@angular/core';

import {LivresService} from '../service/livres-service.service';

import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  books;
  private keyword:string="";

  private currentPage:number=1;
  private pageSize:number=5;
  private pages:Array<number>;
  constructor(private booksService:LivresService,public dialog: MatDialog) { }

  ngOnInit(){}
  private onSearchBooks() {
    this.booksService.searchBooks(this.keyword,this.currentPage,this.pageSize)
      .subscribe(data=>{
        this.books=data;
        this.pages=new Array<number>(data.pages);
      },err=>{
        console.log(err);
      })
  }
  onPageBooks(i:number) {
    this.currentPage=i+1;
    this.onSearchBooks();
  }

  onSearch(data) {
    console.log (data);
    this.keyword=data.keyword;
    this.onSearchBooks();
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
