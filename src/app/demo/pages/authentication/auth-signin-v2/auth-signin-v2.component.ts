import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastService} from '../../../../theme/shared/components/toast/toast.service';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})
export class AuthSigninV2Component implements OnInit {

  submitted =false;
  logForm!: FormGroup;
  user:{} = {
    email: 'admin@gmail.com',
    pass : 'admin123',
  };

  constructor(public toastEvent: ToastService,private fb: FormBuilder, private router: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.loginForm();

  }

  loginForm() {
    this.logForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  onSubmit() {

    if (!this.logForm.valid) {
      console.log("yes");
      this.toastEvent.toast("test")
    } else {


      if(this.user['email']==this.logForm.value.email && this.user['pass']==this.logForm.value.password){

        this.route.navigate(['/dashboard/default']);
      }else{
        console.log("no");
      }

    }
  }

}
