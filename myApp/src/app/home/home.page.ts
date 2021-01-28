import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import {EmailService} from '../home/service/home.service';
import { ToastService } from './service/toast.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  createTaskForm: FormGroup;
  constructor(private emailService:EmailService,private toastService: ToastService) {}


  ngOnInit(){
    // this.userForm = this.formBuilder.group({
    
    //    duration: 'duration',
    //    name:'name',
    //    email:'email',
    //    contact:'contact',
    //    address: 'address'
     
    // })

    this.createTaskForm = new FormGroup({
      noOfFlavour: new FormControl("", [Validators.required]),
      duration: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contact: new FormControl(""),
      orderAmount: new FormControl(""),
      address: new FormControl("", [Validators.required]),
    });
  }

  sendMail(){
      console.log(this.createTaskForm.value);
      debugger;
      this.emailService.sendMail(this.createTaskForm.value.noOfFlavour,this.createTaskForm.value.duration,
        this.createTaskForm.value.name,this.createTaskForm.value.email,this.createTaskForm.value.contact,
        this.createTaskForm.value.orderAmount,
        this.createTaskForm.value.address).subscribe((result:any)=>{
          console.log(result);
          if(result.success==true){
            this.toastService.successToast("Email has been sent successfully");
            this.createTaskForm.reset();
          }
        })

      // this.emailService.sendMaillll().subscribe((result:any)=>{
      //     console.log(result);
      //   })


  }
}
