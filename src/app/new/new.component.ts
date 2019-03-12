import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  

    registrationForm = new FormGroup({
    firstname: new FormControl(' ',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    
    addressForm : new FormGroup({ 
      lane1: new FormControl(''),
      lane2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    }),
   });

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.warn(this.registrationForm.value);
  }

}
