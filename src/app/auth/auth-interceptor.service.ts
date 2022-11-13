import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'
// import { IAPIOptions, RequestType } from 'src/app/encryptionEnum';
// import { AuthService } from './auth.service';
// import { StorageService } from 'src/app/app.storage.service';
// import { AppService } from 'src/app/app.service';
// import { Constants } from 'src/app/app.constants';
// import { EncryptionService } from 'src/app/encryption.service';
// import { CommonService } from 'src/app/common.service';
// import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.get('No-Auth') == "True") {
      return next.handle(req.clone());
    }

    // if (this.auth.getAccessToken()) {
    //   let count = 0;

    //   let switchUserId = this.storageService.getDataFromLocalStorage("switchUserId");

    //   let newAccount = this.storageService.getDataFromLocalStorage("newAccount")
    //   //  let headers = new HttpHeaders();
    //   let headers = req.headers;

    //   let _headers = {};

    //   headers = headers.set("Authorization", this.auth.getAccessToken());

    //   // set authorization
    //   _headers["Authorization"] = `Bearer ${this.auth.getAccessToken()}`;

    //   if (switchUserId && !headers.has('userId')) {

    //     headers = headers.set("userId", switchUserId);

    //     // set userId
    //     _headers["userId"] = `${switchUserId}`;

    //   } else if (headers.has('userId') && newAccount) {
    //     headers = headers.set("userId", headers.get("userId"));

    //     // set userId
    //     _headers["userId"] = `${headers.get("userId")}`;
    //   }

    //   const clonedreq = req.clone({
    //     headers: headers

    //   });

    //   let apiOptions: IAPIOptions = {
    //     Headers: { 'Content-Type': "application/json" },
    //     RequestURL: clonedreq.urlWithParams,
    //     RequestMethod: clonedreq.method,
    //     RequestBody: clonedreq.body,
    //     RequestHeaders: headers

    //   }

    //   // var reqq = new HttpRequest('GET', req.urlWithParams, {
    //   //   headers: headers
    //   // });

    //   let requestBody = {
    //     methodType: apiOptions.RequestMethod,
    //     url: clonedreq.urlWithParams,
    //     header: _headers,
    //     contentType: undefined,
    //     payload: {},
    //     enableEncryption: true
    //   }

    //   var cipherPayLoad = CryptoJS.AES.encrypt(JSON.stringify(requestBody).trim(), "z$C&F)J@McQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s5v8y").toString();

    //   debugger;
    //   var reqq = new HttpRequest('POST', "http://localhost:80/hmcl_proxy_api/service.php", cipherPayLoad, {
    //     reportProgress: false,
    //     responseType: "text",
    //     withCredentials: false
    //   });



    //   // next.handle(reqq).toPromise().then((data) => {
    //   //   debugger;
    //   //   console.log(data)
    //   // });

    //   // next.handle(reqq).subscribe((data) => {

    //   //   debugger;

    //   //   console.log(data);

    //   // })

    //   // let response = this.getResponseData(next, reqq);

    //   // console.log(response);

    //   // let response = next.handle(reqq).pipe();

    //   // debugger;
    //   // console.log("====== res =====");
    //   // console.log(response);

    //   return next.handle(reqq)
    //     .pipe(tap(

    //       succ => {
    //         debugger;
    //         if (succ instanceof HttpResponse) {

    //           debugger;

    //           // var decryptedResponseBody: any = CryptoJS.AES.decrypt(succ['body'], "z$C&F)J@McQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s5v8y").toString(CryptoJS.enc.Utf8).trim();

    //           // return succ.clone({
    //           //   body: { "name": "fayaa" }
    //           // })

    //           // this.decrypt(succ['body']).then((dRes) => {

    //           //   debugger;

    //           //   succ = new HttpResponse({
    //           //     body: dRes,
    //           //     headers: succ["headers"],
    //           //     status: succ["status"],
    //           //     statusText: succ["statusText"],
    //           //     url: succ["url"]
    //           //   });

    //           //   //succ.clone({ body: dRes });

    //           // });


    //           // succ = new HttpResponse({
    //           //   body: JSON.parse(decryptedResponseBody),
    //           //   headers: succ.headers,
    //           //   status: succ.status,
    //           //   statusText: succ.statusText,
    //           //   url: succ.url
    //           // });


    //           // debugger

    //           // return succ;

    //           // console.log(JSON.parse(decryptedResponseBody))

    //           // return JSON.parse(decryptedResponseBody);

    //         }

    //       },
    //       err => {
    //         debugger;
    //         if (err.status == Constants.HTTP_STATUS.UNAUTHORIZED) {
    //           // alert(JSON.stringify(err))
    //         }

    //       })
    //     );

    // }
    return next.handle(req)

  }


}
