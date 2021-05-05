import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  queryMessage:any; //FormGroup;
  constructor(private httpService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setQueryMessage();
  }

  onSubmit(){
    this.httpService.storeMessageToDatabase(JSON.stringify(this.queryMessage.getRawValue()));
    this.queryMessage.reset();
  }

  setQueryMessage(){
    this.queryMessage = new FormGroup({
      'name': new FormControl( null, [Validators.required]),
      'email': new FormControl( null, [Validators.required, Validators.email]),
      'message': new FormControl( null, [Validators.required]),
    })
  }

  openSnackBar(){
    this.snackBar.open('Message sent', '', {
      duration: 3000,
    });
  }
}
