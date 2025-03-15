import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

export const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadComponent: () => import('./views/home/home.component'),
			},
		],
	},
];
