import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  queryMessage:any; //FormGroup;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.queryMessage = new FormGroup({
      'name': new FormControl( null, [Validators.required]),
      'email': new FormControl( null, [Validators.required, Validators.email]),
      'message': new FormControl( null, [Validators.required]),
    })
  }

  onSubmit(){
    this.httpService.storeMessageToDatabase(JSON.stringify(this.queryMessage.getRawValue()));
    this.queryMessage.reset();
  }
}
