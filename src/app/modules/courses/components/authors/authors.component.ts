import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsComponent {

}
