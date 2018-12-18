import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  h1Style = false;
  outputRegister = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  firstClick() {
    this.data.registerUser()
      .subscribe(
        data => this.outputRegister = this.outputRegister = 'ID: ' + data.id + '; Created at: ' + data.createdAt, /*console.log('success', data),*/
        error => console.log('oops', error)
      );
  }
}
