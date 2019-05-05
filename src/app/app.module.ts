import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { AreaCalculatorComponent } from './areacalc/areacalc.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AreaCalculatorComponent

  ],
  imports: [
    BrowserModule
  ],
  providers:[],
  bootstrap:[AppComponent]

})
export class AppModule{

}