import { tap, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './../model/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http:HttpClient) {
    
  }
  
  findMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`/mapi/exam/descriptionMovies/${movieId}.txt`);
  }


  /**
   * Data schema is
   * {"movies":[
   *  {"id":"1000", "name":"Suicide Squad","year":"2016","category":"action"},
   *  {"id":"1001", "name":"Batman v Superman: Dawn of Justice","year":"2016","category":"action"},
   *  {"id":"1002", "name":"Focus","year":"2015","category":"comedy"},
   *  {"id":"1003", "name":"Bajrangi Bhaijaan","year":"2015","category":"comedy"},
   *  {"id":"1004", "name":"The Dark Knight","year":"2008","category":"drama"},
   *  {"id":"1005", "name":"Harry Potter veotzarot hamavet","year":"2011","category":"Fantasy"},
   *  {"id":"1006", "name":"Hasandak ","year":"1972","category":"Crime"},
   *  {"id":"1007", "name":"Fight Club","year":"19999","category":"Drama"},
   *  {"id":"1008", "name":"Ra'kevet ha'kerakh","year":"2013","category":"action"},
   *  {"id":"1009", "name":"Gladiator","year":"2000","category":"Drama"}
   * ]}
   * 
   * so we return res['movies']
   */
  findAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`/mapi/exam/allMovies/allMovies.txt`)
      .pipe(map((res) =>
          res['movies']
        )
      );
  }
}
