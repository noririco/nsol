import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';


/**
 * NOTE: Here we apply all router transitions.
 * example: MoviesPage is the name of the data['animation'] provided with the route itself.
 */
export const routeAnimation = trigger('routeAnimation', [
  transition('MoviesPage => MovieDetailsPage', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }),
    /* 2 */
    group([ // block executes in parallel
      query(':enter', [
        style({
          transform: 'translateX(100%) scale(1)',
          opacity: 0,
        }),
        animate('1s cubic-bezier(0.680, -0.550, 0.265, 1.550)', style({
          transform: 'translateX(0%)',
          opacity: 1
          
        }))
      ], {
        optional: true
      }),
      query(':leave', [
        style({
          transform: 'translateX(0%)',
          opacity: 0.15,
        }),
        animate('0.5s ease-in-out', style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }))
      ], {
        optional: true
      }),
    ])
  ]),
  transition('MovieDetailsPage => MoviesPage', [
    /* order */
    /* 1 */
    
    query(':enter, :leave', style({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }),
    /* 2 */
    group([ // block executes in parallel
      query(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('0.5s ease-in-out', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ], {
        optional: true
      }),
      query(':leave', [
        style({
          transform: 'translateX(0%)'
        }),
        animate('0.5s ease-in-out', style({
          transform: 'translateX(100%)'
        }))
      ], {
        optional: true
      }),
      query('@listStaggerAnimation', [
        animateChild()
      ]),
    ])
  ]),
  // transition('* => MoviesPage', [
  //   /* order */
  //   /* 1 */
  //   query(':enter, :leave', style({
  //     position: 'fixed',
  //     width: '100%',
  //     'z-index': -3
  //   }), {
  //     optional: true
  //   }),
  //   /* 2 */
  //   group([ // block executes in parallel
  //     query(':enter', [
  //       style({
  //         transform: 'translateY(-100%)'
  //       }),
  //       animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({
  //         transform: 'translateY(0%)'
  //       }))
  //     ], {
  //       optional: true
  //     }),
  //     query(':leave', [
  //       style({
  //         opacity:0,
  //         transform: 'translateY(0%)'
  //       }),
  //       animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({
  //         transform: 'translateY(100%)'
  //       }))
  //     ], {
  //       optional: true
  //     }),
  //   ])
  // ]),
  transition('* => CoursesPage', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({
      position: 'fixed',
      width: '100%',
      'z-index': -3
    }), {
      optional: true
    }),
    /* 2 */
    group([ // block executes in parallel
      query(':enter', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({
          transform: 'translateY(0%)'
        }))
      ], {
        optional: true
      }),
      query(':leave', [
        style({
          opacity:0,
          transform: 'translateY(0%)'
        }),
        animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({
          transform: 'translateY(100%)'
        }))
      ], {
        optional: true
      }),
    ])
  ])
])
