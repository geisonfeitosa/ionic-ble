import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const SERVICE = "http://localhost:10001";

@Injectable()
export class OpenService {

    constructor(private http: HttpClient){}

    open(): Observable<any> {
        return this.http.get(`${SERVICE}/led/on`);
    }
}