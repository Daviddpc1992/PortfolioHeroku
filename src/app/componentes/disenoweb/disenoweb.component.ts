import { Component, OnInit } from '@angular/core';
import { Web } from 'src/app/interfaces/web.interface';
import { WebSkipTestService } from 'src/app/service/web.service';


@Component({
  selector: 'app-disenoweb',
  templateUrl: './disenoweb.component.html',
  styleUrls: ['./disenoweb.component.css']
})
export class DisenowebComponent implements OnInit {
  show: boolean = true;

  webs: Web[] = []

  constructor(
    private websservice: WebSkipTestService,

  ) { }

  ngOnInit(): void {
    this.webs = this.websservice.getAll()
      };
    
  

}
