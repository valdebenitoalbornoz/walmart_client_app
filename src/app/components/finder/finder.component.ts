import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  search: string = '';
  form: FormGroup;
  @Output() onsearch = new EventEmitter<string>();
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      search: [ null ]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.onsearch.emit(this.form.controls.search.value)
  }

}
