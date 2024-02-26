import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VetDetailComponent } from "../vet-detail/vet-detail.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AllvetsComponent } from "../allvets/allvets.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    imports: [RouterLink, RouterOutlet, MatSidenavModule, MatListModule, MatToolbarModule, VetDetailComponent, NavbarComponent, AllvetsComponent, FormsModule, CommonModule, BodyComponent]
})
export class SidenavComponent {

  hide: boolean = false;
  unhide(){
    this.hide = !this.hide;
    console.log(this.hide);
  }
}
