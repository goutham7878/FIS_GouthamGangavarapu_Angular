import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form:any = FormGroup;
  submitted=false;
  get f() { return this.form.controls; }
  onSubmit() {
    if(this.form.username == "admin" && this.form.password == "admin")
    {
      this.submitted=true;
      alert("Successful Login");
    }
    if(this.form.invalid){
      return;
    }
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
