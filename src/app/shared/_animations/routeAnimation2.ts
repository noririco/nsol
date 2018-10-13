import {
    trigger,
    animate,
    style,
    query,
    transition
  } from '@angular/animations';
  
  
  /**
   * NOTE: Here we apply all router transitions.
   * example: MoviesPage is the name of the data['animation'] provided with the route itself.
   */
  export const routeAnimation2 = trigger('routeAnimation2', [
      transition('MoviesPage => MovieDetailsPage', [
        query(':enter', style({ position: 'fixed',width: '100%',opacity: 0 })),
        query(':leave', [animate('1s', style({ opacity : 0 }))]),
        query(':enter', [animate('1s', style({ opacity : 1 }))])
      ])
  ])