import { Component, OnInit} from '@angular/core';
import {Observable,of, from, fromEvent} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
 
  subscribtion;
  ngOnInit() {
    const ob = of(1,2,3,4,5,6).pipe(
      map((val)=> val * val),
      filter((val)=>val > 4)
      );
    ob.subscribe((val)=>{
       console.log(val);
    });
  
  }

eventObservableEx() {
const el = document.getElementById('name');

// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent(el, 'mousemove')
const subscription = mouseMoves.subscribe((evt:MouseEvent) => {
  console.log(evt);
});


}

 simpleOvservalbe() {
   this.subscribtion = new Observable((obserber) => {
    var cnt = 0;
    if(cnt === 0){
    setInterval(()=> {
      obserber.next(++cnt);
      if(cnt ===10){
          obserber.complete();
      }
      
    },1000)
  }
  });

  this.subscribtion.subscribe({
    next:(val)=> {
      console.log(val);
    },error:()=>{
      console.log('Error');
    },complete:()=> {
         console.log('complete');
    }
  });
setTimeout(()=> {
  this.subscribtion.subscribe({
    next:(val)=> {
      console.log('2==',val);
    },error:()=>{
      console.log('Error');
    },complete:()=> {
         console.log('complete');
    }
  });
},2000)
   
 }
}
