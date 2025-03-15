import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	public displayResponsiveMenu = signal<boolean>(false);

	toggleResponsiveMenu(): void {
    this.displayResponsiveMenu.update((v) => !v);
	}
}
