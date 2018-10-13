import {
    trigger,
    animate,
    style,
    query,
    stagger,
    transition
  } from '@angular/animations';
  
  
  /**
   * NOTE: Here we apply all router transitions.
   * example: MoviesPage is the name of the data['animation'] provided with the route itself.
   */
  export const listStaggerAnimation = trigger('listStaggerAnimation', [
    transition('* <=> *', [
        query(
        ':enter',
        [
            style({ opacity: 0, transform: 'translateY(-17px)' }),
            stagger(
            '50ms',
            animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
            )
            )
        ],
        { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
        })
    ])
])

  