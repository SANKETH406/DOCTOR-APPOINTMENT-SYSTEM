import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  data:any;
  getData(){
    console.log(this.regForm.value)
    
  }
  onClickReg(){
    this.router.navigateByUrl('/Login')
  }

    regForm=new FormGroup({
    fullname:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)]),
    age:new FormControl('',[Validators.required, Validators.maxLength(2)])
  })

  get name(){
    return this.regForm.get('address')
  }

  get email(){
    return this.regForm.get('email')
  }

  get phone(){
    return this.regForm.get('phone')
  }

  get password(){
    return this.regForm.get('password')
  }

  get age(){
    return this.regForm.get('age')
  }
}
