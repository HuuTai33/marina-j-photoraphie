import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'mon-travail/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { category: 'equestres' },
      { category: 'animaux' },
      { category: 'portraits' },
      { category: 'lieux' },
      { category: 'noir-et-blanc' }
    ]
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
