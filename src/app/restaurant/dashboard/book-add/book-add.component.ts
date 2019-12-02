import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.sass']
})
export class BookAddComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSuccess() {
    this.router.navigateByUrl('/admin');
  }

}
