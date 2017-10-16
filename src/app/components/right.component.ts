import { Component } from '@angular/core';

@Component({
  selector: 'right',
    templateUrl:'/app/html/right.component.html',
styleUrls:['app/html/right.component.css']
})
export class RightComponent  { 
    
    goto(location:string):void{
    window.location.hash = location
}
    
}
