import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() cardPhoto: string = ' ';
  @Input() cardTitle: string = ' ';
  @Input() cardDescription: string = ' ';
}
