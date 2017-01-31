import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { CompleteLengthPipe } from './complete-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    CompleteLengthPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
