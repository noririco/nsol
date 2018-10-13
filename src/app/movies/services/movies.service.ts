import { environment } from './../../../environments/environment.prod';

import { tap, map, switchMap } from 'rxjs/operators';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './../model/movie.model';
import { HttpClient } from '@angular/common/http';

//TODO: find a solution to get the data from the 3rd-party

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  
  ALL_MOVIES : Movie[];
  ALL_MOVIES_EXT : Movie[];
  baseUrl :string;
 
  constructor(private http:HttpClient) {
    this.ALL_MOVIES  = [
    
      {"id":"1000", "name":"Suicide Squad","year":2016,"category":"action"},
      {"id":"1001", "name":"Batman v Superman: Dawn of Justice","year":2016,"category":"action"},
      {"id":"1002", "name":"Focus","year":2015,"category":"comedy"},
      {"id":"1003", "name":"Bajrangi Bhaijaan","year":2015,"category":"comedy"},
      {"id":"1004", "name":"The Dark Knight","year":2015,"category":"drama"},
      {"id":"1005", "name":"Harry Potter veotzarot hamavet","year":2011,"category":"Fantasy"},
      {"id":"1006", "name":"Hasandak ","year":1972,"category":"Crime"},
      {"id":"1007", "name":"Fight Club","year":1999,"category":"Drama"},
      {"id":"1008", "name":"Ra'kevet ha'kerakh","year":2013,"category":"action"},
      {"id":"1009", "name":"Gladiator","year":2000,"category":"Drama"}
     
    ];

    this.ALL_MOVIES_EXT = [
      {
        "id": "1000",
        "name": "Suicide Squad",
        "year": 2016,
        "category": "action",
        "description": "A secret government agency recruits imprisoned supervillains to execute dangerous black ops missions in exchange for clemency.",
        "imageUrl": "http://x-mode.co.il/exam/descriptionMovies/1000.jpg",
        "promoUrl": "https://www.youtube.com/watch?v=8aYFGcdANFc",
        "rate": "8",
        "hour": "22:00"
      },
      {"id":"1001", "name":"Batman v Superman: Dawn of Justice","year":2016,"category":"action","description":"Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis' most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1001.jpg","promoUrl":"https://www.youtube.com/watch?v=0WWzgGyAH6Y","rate":"8","hour":"23:00"},
      {"id":"1002", "name":"Focus","year":2015,"category":"comedy","description":"In the midst of veteran con man Nicky's latest scheme, a woman from his past - now an accomplished femme fatale - shows up and throws his plans for a loop.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1002.jpg","promoUrl":"https://www.youtube.com/watch?v=MxCRgtdAuBo","rate":"7","hour":"21:00"},
      {"id":"1003", "name":"Bajrangi Bhaijaan","year":2015,"category":"comedy","description":"A young mute girl from Pakistan loses herself in India with no way to head back. A devoted man with a magnanimous spirit undertakes the task to get her back to her motherland and unite her with her family.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1004.jpg","promoUrl":"https://www.youtube.com/watch?v=YyRylAFvQI8","rate":"10","hour":"20:00"},
      {"id":"1004",  "name":"The Dark Knight","year":2015,"category":"drama","description":"The joker is coming to fight batman, but Batman is strong enough to stop him, because he has black suite","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1004.jpg","promoUrl":"https://www.youtube.com/watch?v=YyRylAFvQI8","rate":"5","hour":"12:00"},
      {"id":"1008", "name":"Ra'kevet ha'kerakh","year":2013,"category":"action","description":"Set in a future where a failed climate-change experiment kills all life on the planet except for a lucky few who boarded the Snowpiercer, a train that travels around the globe, where a class system emerges.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1008.jpg","promoUrl":"https://www.youtube.com/watch?v=99qmpnzfeLM","rate":"1","hour":"16:00"},
      {"id":"1005", "name":"Harry Potter veotzarot hamavet","year":2011,"category":"Fantasy","description":"Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1005.jpg","promoUrl":"https://www.youtube.com/watch?v=eN-9zMrqkCo","rate":"7","hour":"13:00"},
      {"id":"1009", "name":"Gladiator","year":2000,"category":"Drama","description":"When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1009.jpg","promoUrl":"https://www.youtube.com/watch?v=xbHPTPUpQ1I","rate":"9","hour":"14:30"},
      {"id":"1007", "name":"Fight Club","year":1999,"category":"Drama","description":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1007.jpg","promoUrl":"https://www.youtube.com/watch?v=Brntigzhqr4","rate":"6","hour":"15:00"},
      {"id":"1006", "name":"Hasandak ","year":1972,"category":"Crime","description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","imageUrl":"http://x-mode.co.il/exam/descriptionMovies/1006.jpg","promoUrl":"","rate":"3","hour":"14:00"}


    ];
  }
  
  findMovieById(movieId: number): Observable<Movie> {
    
    return of(this.ALL_MOVIES_EXT.find(movie => +movie.id == movieId));
    // return this.http.get<Movie>(`mapi/exam/descriptionMovies/${movieId}.txt`);
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
    if(isDevMode()) {
      // return this.http.get<Movie[]>(`mapi/exam/allMovies/allMovies.txt`)
      //   .pipe(map((res) => res['movies'])
      //   );
      return of(this.ALL_MOVIES);
    }
    else {
      //FIX: find if its a production problem or angular problem
      //Failed to load https://x-mode.co.il/exam/allMovies/allMovies.txt: No 'Access-Control-Allow-Origin' header is present on the requested resource.
      return of(this.ALL_MOVIES);

      // return this.http.get<Movie[]>(`${environment.baseUrl}/exam/allMovies/allMovies.txt`)
      //   .pipe(map((res) => res['movies'])
      //   );
    }
  }
}
