import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ApiService} from '../../core/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private apiService: ApiService) { }

  sendMail(noOfFlavour,duration,name,email,contact,orderAmount,address){
    // const obj = {
    //    myMail:"arsalan4636@gmail.com",
    //    
    //    
    //    subject: "Test Subject",
    //    noOfFlavour:noOfFlavour,
    //    duration:duration,
    //    name:name,
    //    email:email,
    //    contact:contact,
    //    address:address,
    //    orderAmount:orderAmount
    //   };

      const formData = new FormData();


      formData.append("noOfFlavour", noOfFlavour);
      formData.append("duration", duration);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("address", address);
      formData.append("otherAmount", orderAmount);
  
      debugger;
      // http://ilogicspk.com/dev/kiani_courier/admin/auth/sendShishaAppMail
      return this.apiService.sendPostRequest('',formData);


    }

    sendMaillll(){
      // const obj = {
      //    myMail:"arsalan4636@gmail.com",
      //    myPassword: "arsalantariq%@!",
      //    sendTo: "arsalan.tariq@holodeck.xyz",
      //    subject: "Test Subject",
      //    noOfFlavour:noOfFlavour,
      //    duration:duration,
      //    name:name,
      //    email:email,
      //    contact:contact,
      //    address:address
      //   };
      const obj ={

      };
    
        debugger;
        return this.apiService.sendPostRequest('/mainRoute',obj)
      }


  }

