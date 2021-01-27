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

  public sendPostRequest(path, value) {

    return new Observable((observer) => {
      debugger
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
      this.httpClient.delete(this.prefix + path, { params: data })
        .subscribe((res) => {
          observer.next(res);
        }, (err) => {
          console.error("Error while deleting", err);
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
}
