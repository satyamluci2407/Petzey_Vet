import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vet-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './vet-detail.component.html',
  styleUrl: './vet-detail.component.css'
})
export class VetDetailComponent {

}
