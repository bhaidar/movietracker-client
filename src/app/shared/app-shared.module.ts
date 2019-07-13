import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app-main.component';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppMainComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		AppMaterialModule,
	],
	exports: [
		AppMainComponent,
		LoginComponent,
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		AppMaterialModule
	]
})
export class AppSharedModule { }
