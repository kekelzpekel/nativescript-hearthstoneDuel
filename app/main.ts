import {platformNativeScriptDynamic, NativeScriptModule} from 'nativescript-angular/platform';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routes, navigatableComponents} from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		...navigatableComponents
	],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	bootstrap: [AppComponent]
})
class AppComponentModule {
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);