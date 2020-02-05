import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { AparteComponent } from './aparte/aparte.component';
import { SectionComponent } from './section/section.component';
import { PieComponent } from './pie/pie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuDosComponent } from './menu-dos/menu-dos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FotosComponent } from './fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    AparteComponent,
    SectionComponent,
    PieComponent,
    MenuDosComponent,
    FotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
