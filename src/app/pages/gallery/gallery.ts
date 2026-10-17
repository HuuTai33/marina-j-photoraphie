import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type GalleryCategory = 'equestres' | 'animaux' | 'portraits' | 'lieux' | 'noir-et-blanc';

interface GalleryConfig {
  id: GalleryCategory;
  title: string;
  layout: string;
}

const GALLERY_CONFIGS: Record<GalleryCategory, GalleryConfig> = {
  equestres: {
    id: 'equestres',
    title: 'Équestres',
    layout: 'equestres'
  },
  animaux: {
    id: 'animaux',
    title: 'Animaux',
    layout: 'animaux'
  },
  portraits: {
    id: 'portraits',
    title: 'Portraits',
    layout: 'portraits'
  },
  lieux: {
    id: 'lieux',
    title: 'Lieux',
    layout: 'lieux'
  },
  'noir-et-blanc': {
    id: 'noir-et-blanc',
    title: 'Noir&Blanc',
    layout: 'noir-et-blanc'
  }
};

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  readonly category = input<string>('equestres');

  readonly currentConfig = computed<GalleryConfig>(() => {
    const cat = (this.category() as GalleryCategory) || 'equestres';
    return GALLERY_CONFIGS[cat] || GALLERY_CONFIGS.equestres;
  });
}
