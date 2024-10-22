import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() photoCover: string = ''
  @Input() contentTitle: string = ''
  @Input() contentDescription: string = ''

  constructor(
    private route: ActivatedRoute
  ){}

 
}
