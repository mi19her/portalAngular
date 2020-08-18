import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [AppComponent ],
	imports: [
		BrowserModule,
		routing,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		AmplifyAngularModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
	],
	providers: [AmplifyService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
