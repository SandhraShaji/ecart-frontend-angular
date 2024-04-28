import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder, private api: ApiService, private router: Router){}
  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  register(){
    if(this.registerForm.valid){
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
      console.log(username,email,password);
      const user = {username,email,password}
      this.api.register(user).subscribe({
        next:((res:any)=>{
          console.log(res);
          Swal.fire({
            title: 'Success!',
            text: 'User registration success',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigateByUrl("/user/login")
        }),
        error:(err:any)=>{
          console.log(err);
          if(err.status===404){
            Swal.fire({
              title: 'Warning!',
              text: 'Email already exists',
              icon: 'warning',
              confirmButtonText: 'Back'
            })
          }
          else{
            Swal.fire({
              title: 'Error!',
              text: 'User registration failed',
              icon: 'error',
              confirmButtonText: 'Back'
            })
          }
        }
      })
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Validation failed',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  }
}
