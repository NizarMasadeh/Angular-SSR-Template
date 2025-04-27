import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    style({ position: 'relative' }),
    style({
      opacity: 0,
      transform: 'scale(0.95) translateY(30px)',
    }),
    animate(
      '0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      style({
        opacity: 1,
        transform: 'scale(1) translateY(0)',
      })
    ),
  ]),
]);