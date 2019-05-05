import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent{
    title = 'Abbas'
    pageIndex : number

    loadPage(pageIndex : number){
      this.pageIndex = pageIndex
    }
}

