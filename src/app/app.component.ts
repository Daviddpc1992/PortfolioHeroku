import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  
  constructor(
    private router: Router,
    
    ) {}
    ngOnInit(): void {

      AOS.init();
    };
    
    @HostListener('window:scroll', []) onWindowScroll() {
      this.scrollFunction();
    }
    
    scrollFunction() {
    const Btn = document.getElementById('myBtn')!; 
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      Btn.style.display = 'block';
    } else {
      Btn.style.display = 'none';
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
