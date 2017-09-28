import { Component, Input, Output, EventEmitter,ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from  "@angular/router";
import { User, UserService } from '../user.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
showLoading : boolean =false
userCreateForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder,private router: Router) { }

  ngOnInit() {

  	this.userCreateForm = this.fb.group({ 
            fullName: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required] }); 


  }

  onSubmitUser(){
  	this.showLoading = true;
  }
}
