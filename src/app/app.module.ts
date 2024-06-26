/*********************
 * Angular Components
**********************/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

/**********
 * Imports
***********/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/***********
* Templates
************/
import { NavbarComponent } from './templates/navbar/navbar.component';

/********************
 * Custom Components
*********************/
import { GameComponent } from './components/games/animal-chain/game/game.component';
import { IntroComponent } from './components/games/animal-chain/intro/intro.component';
import { AnimalChainComponent } from './components/games/animal-chain/animal-chain.component';
import { AddAnimalComponent } from './components/games/animal-chain/add-animal/add-animal.component';
import { TwentyThreePlusOneComponent } from './components/apps/twenty-three-plus-one/twenty-three-plus-one.component';
import { KnappeKoppenComponent } from './components/apps/knappe-koppe/knappe-koppe.component';
import { GasPriceCalculatorComponent } from './components/apps/gas-price-calculator/gas-price-calculator.component';

/********
 * Pages
*********/
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { GamesComponent } from './pages/games/games.component';
import { AppsComponent } from './pages/apps/apps.component';
import { FooterComponent } from './templates/footer/footer.component';
import { UniversalSchedulerComponent } from './components/apps/universal-scheduler/universal-scheduler.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    GamesComponent,
    AppsComponent,
    NavbarComponent,
    KnappeKoppenComponent,
    AnimalChainComponent,
    TwentyThreePlusOneComponent,
    IntroComponent,
    GameComponent,
    AddAnimalComponent,
    FooterComponent,
    GasPriceCalculatorComponent,
    UniversalSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,   
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient] 
        }
      })
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
