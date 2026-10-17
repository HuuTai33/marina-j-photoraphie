import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { GalleryComponent } from './pages/gallery/gallery';
import { routes } from './app.routes';

describe('App & Pages', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HomeComponent, ContactComponent, GalleryComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Home page with title and sections', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-title')?.textContent).toContain('Marina J Photographie');
    expect(compiled.querySelector('#about .section-title')?.textContent).toContain('A propos de moi');
    expect(compiled.querySelector('#work .work-title')?.textContent).toContain('Mon travail');
  });

  it('should render Contact page', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.contact-title')?.textContent).toContain('souvenirs');
    expect(compiled.querySelector('.contact-info')?.textContent).toContain('marinajphoto@gmail.com');
  });

  it('should render Gallery page with specified category', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.componentRef.setInput('category', 'equestres');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.gallery-title')?.textContent).toContain('Équestres');
    expect(compiled.querySelector('.layout-equestres')).toBeTruthy();
  });
});
