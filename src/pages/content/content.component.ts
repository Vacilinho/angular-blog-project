import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../app/data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() photoCover: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';

  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == this.id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
