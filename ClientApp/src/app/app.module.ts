import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AhsanComponent } from './Ahsan/ahsan.component';
import { AndresComponent } from './Andres/andres.component';
import { BradComponent } from './Brad/brad.component';
import { KeithComponent } from './Keith/keith.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AhsanComponent,
    AndresComponent,
    BradComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'ahsan', component: AhsanComponent},
      { path: 'andres', component: AndresComponent },
      { path: 'brad', component: BradComponent },
      { path: 'keith', component: KeithComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
