import { CoefficientsFootball } from "./coefficientFootball.model";
import { CoefficientsTennis } from "./coefficientsTennis.model";

export class Odd{
    
    id: number;
    pairOne: string; 
    pairTwo: string; 
    tournament: string; 
    beginingTime: Date;
    coefficientsFootballs: CoefficientsFootball[]; 
    coefficientsTennis: CoefficientsTennis[]; 

    
}