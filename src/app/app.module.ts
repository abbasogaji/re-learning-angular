import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { AreaCalculatorComponent } from './areacalc/areacalc.component';
import { HomeComponent } from './home/home.component';
import { DateServices } from './services/date.services';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  { path : '', component: HomeComponent},
  { path : 'area-calculator', component: AreaCalculatorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AreaCalculatorComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    DateServices
  ],
  bootstrap:[AppComponent]

})
export class AppModule{

}