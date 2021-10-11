import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './dictionary/create/create.component';
import { EditComponent } from './dictionary/edit/edit.component';
import { ListComponent } from './dictionary/list/list.component';
import { DetailComponent } from './dictionary/detail/detail.component';
import { DictionaryListComponent } from './dictionary/dictionary-list/dictionary-list.component';
import { ViewComponent } from './dictionary/view/view.component';
import { DictionaryCreateComponent } from './dictionary-create/dictionary-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    DetailComponent,
    DictionaryListComponent,
    ViewComponent,
    DictionaryCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
