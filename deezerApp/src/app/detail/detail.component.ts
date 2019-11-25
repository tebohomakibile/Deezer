import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  obj: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.obj = history.state.data;
    console.log("This is obj", this.obj);
  }

  

}
