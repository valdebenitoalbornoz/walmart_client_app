import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.css']
})
export class NoResultsComponent implements OnInit {
  @Input() text = 'Sin resultados';
  constructor() { }

  ngOnInit(): void {
  }

}
