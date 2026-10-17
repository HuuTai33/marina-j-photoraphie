import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { GalleryComponent } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mon-travail/:category', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];
