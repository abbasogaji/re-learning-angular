import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    @Output('navClicked') navClicked  = new EventEmitter<number>();
    constructor(){

    }
    homePage(){
        this.navClicked.emit(1)
    }
    areaPage(){
        this.navClicked.emit(2)
    }
    serverPage(){
        this.navClicked.emit(3)
    }
    todoPage(){
        this.navClicked.emit(4)
    }
}