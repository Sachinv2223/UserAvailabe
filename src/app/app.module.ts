import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { setBgDirective } from './CustomDirectives/setBg.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { HoverDirective } from './CustomDirectives/hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BetterhighlightDirective } from './CustomDirectives/betterhighlight.directive';
import { ClassDirective } from './CustomDirectives/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ChildComponent,
    setBgDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
