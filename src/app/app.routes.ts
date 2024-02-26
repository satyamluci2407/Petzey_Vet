import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'side', component: SidenavComponent},
    { path: 'nav', component: NavbarComponent},
    { path: 'body', component: BodyComponent},
    { path: 'prof', component: VetDetailComponent}
];
