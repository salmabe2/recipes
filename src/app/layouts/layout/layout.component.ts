import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
	imports: [HeaderComponent, RouterModule],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
