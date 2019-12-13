import { HttpClient } from "@angular/common/http";
import { Sport } from "../models/sport.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Odd } from "../models/odd.model";
import { CoefficientsFootball } from "../models/coefficientFootball.model";
import { DroppingOdd } from "../models/droppingOdd.model";
import { CoefficientsTennis } from "../models/coefficientsTennis.model";

const ODDS_API: string = "http://localhost:4087/api/odds/";
const ODDS_API_COEFFICIENTS: string = "http://localhost:4087/api/coefficients/";






@Injectable()
export class OddsApiService{
    constructor(private http: HttpClient) {}

    getAllOdds(): Observable<Sport[]>{
        return this.http.get<Sport[]>(ODDS_API + 'sports');
    }

    getAllDroppingOdds(): Observable<DroppingOdd[]>{
        return this.http.get<DroppingOdd[]>(ODDS_API + 'sports/droppingodds');
    }

    getDroppingOddsBySport(sport: string): Observable<DroppingOdd[]>{
        return this.http.get<DroppingOdd[]>(ODDS_API + 'droppingSports/' + sport);
    }

    getDroppingOddsByHoursAndSport(sport: string, minutesOfLastChange: number, minutesOfBeginningTime: number): Observable<DroppingOdd[]>{
        return this.http.get<DroppingOdd[]>(ODDS_API + 'droppingSports/' + sport + '/' + minutesOfLastChange + '/' + minutesOfBeginningTime);
    }

    getOddsBySport(sport: string): Observable<Odd[]>{
        return this.http.get<Odd[]>(ODDS_API + 'sports/'+ sport);
    }

    getSports(){
        return this.http.get<string[]>(ODDS_API + "sportnav");
    }

    getOddById(id: string):Observable<CoefficientsFootball[]>{
        return this.http.get<CoefficientsFootball[]>(ODDS_API_COEFFICIENTS+ "football/" + id);
    }
    getOddByIdTennis(id: string):Observable<CoefficientsTennis[]>{
        return this.http.get<CoefficientsTennis[]>(ODDS_API_COEFFICIENTS+ "tennis/" + id);
    }

    getTournamentsBySport(sport: string): Observable<string[]>{
        return this.http.get<string[]>(ODDS_API + 'sports/tournament/'+ sport);
    }
    getTournament(sport: string, tour: string): Observable<Odd[]>{
        return this.http.get<Odd[]>(`${ODDS_API}/sports/${sport}/${tour}`);
    }

    getTournamentSingle(tournament: string): Observable<Odd[]>{
        return this.http.get<Odd[]>(ODDS_API + 'sports/tour/'+ tournament);
    }

   
  
}