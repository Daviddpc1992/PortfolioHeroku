import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']

  
})
  
export class AboutmeComponent implements OnInit {
  down: boolean = false;
  
  constructor() { }
  

  ngOnInit(): void {
    
  }
  
  goDown($event) {
    if ($event) {

      setTimeout(() => {
      this.down = true;
    }, 200);
    }
  }

  

}
