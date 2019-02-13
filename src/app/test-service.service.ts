import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Odd } from './models/odd.model';
import { SportsNAvbar } from './models/sportsNavbar';

const MARATHONAPI: string = "http://localhost:4087/api/odds";
const MARATHONAPI2: string = "http://localhost:4087/api/odds/sports/";
const MARATHONAPI3: string = "http://localhost:4087/api/odds/sportnav";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient ) { }

  getOdds():Observable<Odd[]>{
    
    return this.http.get<Odd[]>(MARATHONAPI);

  }
  getOddsBySport(sport: string):Observable<Odd[]>{
    
    return this.http.get<Odd[]>(MARATHONAPI2 + sport);

  }

  getTest(){
    return this.http.get<string[]>(MARATHONAPI3);
  }
}
