import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  reserveSlot(): void {
    window.location.href = 'mailto:marinajphoto@gmail.com?subject=R%C3%A9servation%20de%20cr%C3%A9neau%20photo';
  }
}
