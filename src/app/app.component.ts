import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BodyComponent } from "./body/body.component";
import { VetDetailComponent } from "./vet-detail/vet-detail.component";
import { AllvetsComponent } from "./allvets/allvets.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SidenavComponent, BodyComponent, VetDetailComponent, AllvetsComponent]
})
export class AppComponent {
  title = 'Petzey_Vet_Angular';
}
