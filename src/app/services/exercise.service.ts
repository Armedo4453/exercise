import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http : HttpClient) { }

Data(){
  const header= new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key' : 'xlHazM4O0McLaBqgIKvnvw==dm9gAF1OnRmjUgc2'

  })
  return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {headers:header})
}

}