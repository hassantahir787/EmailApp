import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  prefix = environment.config.backend_url;
  constructor(private httpClient: HttpClient) { }

  public getTransportLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 2
    });
  }

  public getGenderLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 3
    });
  }

  public getHouseHoldLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 4
    });
  }

  public getIncomeGroupLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 5
    });
  }

  public getUrgencyLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 6
    });
  }

  public getAccountTypeLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 7
    });
  }

  public getCategoryLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 8
    });
  }

  public getDiseaseTypeLookup() {
    return this.sendGetRequestParams("lookup", {
      id: 9
    });
  }

  // public getContributorInfoLookup() {
  //   return this.sendGetRequestParams("lookup", {
  //     id: 1
  //   });
  // }

  public createCase(requestData){
    return this.sendPostRequest(requestData, "case");
  }

  // public createFacility(requestData){
  //   return this.sendPostRequest(requestData, "facility");
  // }

  
  // public getFacilityById(id: number) {
  //   let params = new HttpParams();

  //   params = params.append('id', id + "");

  //   return new Observable((observer) => {
  //     console.log("Calling with params: ", params);
  //     this.httpClient.get(this.prefix + "facility", { params: params })
  //       .subscribe((res) => {
  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }


  // public getFacilities() {
  //   return new Observable((observer) => {
  //     this.httpClient.get(this.prefix + "facility")
  //       .subscribe((res) => {
  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }

  // public getFacilityServices() {
  //   return new Observable((observer) => {
  //     this.httpClient.get(this.prefix + "facility_services")
  //       .subscribe((res) => {
  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }

  // public getTotalCount() {
  //   
  //   return new Observable((observer) => {

  //     this.httpClient.get(this.prefix + "world?data_source=2")
  //       .subscribe((res) => {
  //         //console.log("Successfully posted:", res);

  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }

  // public getCountryCount() {
  //   
  //   return new Observable((observer) => {

  //     this.httpClient.get(this.prefix + "country?data_source=2")
  //       .subscribe((res) => {
  //         // console.log("Successfully posted:", res);
  //         
  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }

  // public getCountries() {

  //   return new Observable((observer) => {

  //     this.httpClient.get(this.prefix + "country-location")
  //       .subscribe((res) => {
  //         console.log("Successfully posted:", res);

  //         observer.next(res);
  //       }, (err) => {
  //         console.log("Error while sending post request", err);
  //       });
  //   });
  // }

  public rssFeed() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
     
    };

    return new Observable((observer) => {
            this.httpClient
        .get<any>("", requestOptions)
        .subscribe(res => {
          
          observer.next(res);
        }, (err) => {
          console.log("Error while sending post request", err);
        });
    });
  }

  public sendPostRequest(value, path) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + path, value)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  public sendGetRequest(path) {
    return new Observable((observer) => {
      this.httpClient.get(this.prefix + path)
        .subscribe((res) => {
          observer.next(res);
        }, (err) => {
          console.log('Error while getting  request', err);
        });
    });
  }


  public sendGetRequestParams(path, data) {
    return new Observable((observer) => {
      this.httpClient.get(this.prefix + path, { params: data })
        .subscribe((res) => {
          observer.next(res);
        }, (err) => {
          console.log('Error while getting  request', err);
        });
    });
  }

  public sendDeleteRequest(path, data) {
    return new Observable((observer) => {
      this.httpClient.delete(this.prefix + path + '?answer_id=' + data)
        .subscribe((res) => {
          observer.next(res);
        }, (err) => {
          console.log("Error while deleting", err);
          observer.error(err);
        });
    });
  }

  public sendUpdateRequest(path,value) {
    
    return new Observable((observer) => {
      this.httpClient.patch(this.prefix + path, value)
        .subscribe((res) => {
          observer.next(res);
        }, (err) => {
          console.log("Error while Updating", err);
          observer.error(err);
        });
    });
  }


  public uploadCourseDP(imageDataUri: any, courseId: number) {
    return new Observable((observer) => {

      const formData = new FormData();
      formData.append('image_data_uri', imageDataUri);
      formData.append('course', courseId + '');

      this.httpClient.post(this.prefix + 'courses/dp', formData)
        .subscribe((result) => {
          observer.next(result);
          // console.log('Result of post is: ', result);
        },
          (err) => {
            observer.next(err);
            // console.log('Error in post is: ', err);
          });
    });
  }


  public createUser(value) {
    return new Observable((observer) => {
      this.httpClient.post(this.prefix + 'users', value)
        .subscribe((result) => {
          observer.next(result);
        }, (err) => {
          observer.error(err);
        });
    });
  }

  // public login(username: string, password: string) {
  //   return new Observable((observer) => {
  //     const requestBody = {
  //       username: username,
  //       password: password
  //     };

  //     this.httpClient.post(this.prefix + 'auth/local', requestBody)
  //       .subscribe((res) => {
  //         observer.next(res);
  //       },
  //         (err) => {
  //           observer.error(err);
  //         });
  //   });
  // }

}
