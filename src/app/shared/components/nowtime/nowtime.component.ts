import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nowtime',
  templateUrl: './nowtime.component.html',
  styleUrls: ['./nowtime.component.scss']
})
export class NowtimeComponent implements OnInit {
 date : Date = new Date();
constructor() { 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }
  ngOnInit() {
  } 

}
