import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueriesComponent } from './queries/queries.component';
import { QueryComponent } from './queries/query/query.component';
import { QueryCreatorComponent } from './query-creator/query-creator.component';
import { QueriesManagerService } from './queries-manager.service';
import { HeaderComponent } from './header/header.component';

import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { TranslateComponent } from './translate/translate.component';
import { SavedComponent } from './saved/saved.component';

const appRoutes:Routes = [
  {path: '', component: TranslateComponent },
  {path: 'saved', component: SavedComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent,
    QueryComponent,
    QueryCreatorComponent,
    HeaderComponent,
    TranslateComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QueriesManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
