import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ApiService} from '../../core/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private apiService: ApiService) { }

  sendMail(noOfFlavour,duration,name,email,contact,address){
    const obj = {
       myMail:"arsalan4636@gmail.com",
       myPassword: "arsalantariq%@!",
       sendTo: "arsalan.tariq@holodeck.xyz",
       subject: "Test Subject",
       noOfFlavour:noOfFlavour,
       duration:duration,
       name:name,
       email:email,
       contact:contact,
       address:address
      };
  
      return this.apiService.sendGetRequestParams('/mainRoute', obj);


    }
  }

