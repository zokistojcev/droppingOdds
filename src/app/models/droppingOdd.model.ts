import { DecimalPipe } from "@angular/common";
import { BiggestAverage } from "./biggestAverage.model";

export class DroppingOdd{
    pairOne: string;
    pairTwo: string;
   
    tournament: string;
    sport: string;
    biggestAverage: BiggestAverage;
    
    beginningTime: Date;
    coefficientFirstDate: Date;
    coefficientLastDate: Date;

    coefficientHostFirst: number;
    coefficientVisitorFirst: number;
    coefficientDrawFirst: number;
    coefficientHostLast: number;
    coefficientVisitorLast: number;
    coefficientDrawLast: number;

    id: number;
    oddId: number; 
}        