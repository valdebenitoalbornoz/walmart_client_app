import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CL';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/components/product-item/product-item.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { LoadingComponent } from './components/loading/loading.component';

registerLocaleData(localeEs, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    ProductListComponent,
    ProductItemComponent,
    NoResultsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
