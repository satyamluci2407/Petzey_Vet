import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-allvets',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './allvets.component.html',
  styleUrl: './allvets.component.css'
})
export class AllvetsComponent {
  AllVets = [
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/VetF.png", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/WilliamSmith.png", name:"Dr. William Smith", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/WilliamSmith.png", name:"Dr. William Smith", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/VetF.png", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
  ]
  HighRatedVets = [
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/VetF.png", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/Ellipse 1.svg", name:"Dr. John Doe", title:"Navle", number:"3456789",time:"18:05",date:"2014-12-12"},
    {url:"assets/images/VetF.png", name:"Dr. Sally Doe", title:"Navle",  number:"3456789",time:"18:05",date:"2014-12-12"},
  ]
}
