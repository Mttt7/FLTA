import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueriesComponent } from './queries/queries.component';
import { QueryComponent } from './queries/query/query.component';
import { QueryCreatorComponent } from './query-creator/query-creator.component';
import { QueriesManagerService } from './queries-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent,
    QueryComponent,
    QueryCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QueriesManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
