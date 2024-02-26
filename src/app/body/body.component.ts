import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  AllPets = [
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
  ]
  RecentlyConsulted = [
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
    {url:"assets/images/Doggo.png", name:"Doggo", title:"Male, 2.2 years",  owner:" Owner: John Doe "},
  ]
}
