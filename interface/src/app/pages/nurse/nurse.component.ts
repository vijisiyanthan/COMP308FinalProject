import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {
  title: String;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }

}
