import { popResultSelector } from "rxjs/internal/util/args";

export interface Data{
    count: number;
    next:string;
    previus:string;
    results: Resultado[];
}

export interface Resultado{
    name:string,
    url:string,

}