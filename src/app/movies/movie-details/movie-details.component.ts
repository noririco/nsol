import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../model/movie.model';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  moviex: Movie;
  youtubeLink: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviex = this.route.snapshot.data["movie"];
    this.youtubeLink = this.moviex.promoUrl;
  }

}
