import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, throwError, Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { ArrayType } from '@angular/compiler';

import * as Rx from "rxjs";
import { signUpdata } from './Model/signUpdata';
import { LoginData } from './login/login.modal';



@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {
  getQuestionDetail(value : any) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/getHotelDetails?'+'number='+value);
  }


  sendRoomBookingResponse(data) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/bookedResponse', data);
  }
  getRoomsDetail(value1,value2) : Observable<any> {
    return this.http.get<any>('http://localhost:8080/roomsDetails?formdate='+value1+'&todate='+value2);
  }
  postSignUpdata(data: signUpdata): Observable<string> {
    return this.http.post<string>('http://localhost:8080/add', data);
  }

  postLoginDetail(data: LoginData): Observable<string> {
    return this.http.post<string>('http://localhost:8080/login', data);
  }

  postaddResponse(data : any) : Observable<any>{
    return  this.http.post<any>('http://localhost:8080/addResult', data);
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient){}
 }
