import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Odd } from './models/odd.model';

const MARATHONAPI: string = "http://localhost:4087/api/odds";


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient ) { }

  getOdds():Observable<Odd[]>{
    return this.http.get<Odd[]>(MARATHONAPI);
  }

  getTest(){
    
  }
}
