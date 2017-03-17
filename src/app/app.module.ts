import { SpaceService } from './space.service';
import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [SpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
