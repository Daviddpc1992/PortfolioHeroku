import { Component, OnInit } from '@angular/core';
import { Web } from 'src/app/interfaces/web.interface';
import { WebSkipTestService } from 'src/app/service/web.service';


@Component({
  selector: 'app-disenoweb',
  templateUrl: './disenoweb.component.html',
  styleUrls: ['./disenoweb.component.css']
})
export class DisenowebComponent implements OnInit {
  down: boolean = false;

  webs: Web[] = []

  constructor(
    private websservice: WebSkipTestService,

  ) { }

  ngOnInit(): void {
    this.webs = this.websservice.getAll()
 
      };
    
      onChange($event) {
        if ($event.target.value === 'todos') {
    
          this.webs = this.websservice.getAll();
    
    
        } else {
          setTimeout(() => {
            this.webs = this.websservice.getByItem($event.target.value);
    
          }, 100);
        
        }
    
    
      }
      goDown($event) {
        if ($event) {
    
          setTimeout(() => {
          this.down = true;
        }, 200);
        }
      }

}
