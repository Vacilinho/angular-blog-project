import { Component } from '@angular/core';
import { MenuBarComponent } from "../../component/menu-bar/menu-bar.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
