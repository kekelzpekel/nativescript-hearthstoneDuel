import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.component';
import {AboutPage} from './pages/about/about.component';

export const routes: Routes = [
	{path: '', component: HomePage},
	{path: 'about', component: AboutPage},
];

export const navigatableComponents = [
	HomePage,
	AboutPage
];

