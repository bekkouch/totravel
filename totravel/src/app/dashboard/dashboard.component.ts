import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges{
  travelForm = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    nbrTravelers: new FormControl(),
    transport: new FormControl(),
    environment: new FormControl(),
    destination: new FormControl(),
  });

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  submit() {
    console.log(this.travelForm.value);
    // console.log( Math.abs(this.travelForm.value.end.getDay().toString() - this.travelForm.value.start);
    const timeDiff = Number(this.travelForm.value.end?.getTime()) - Number(this.travelForm.value.start?.getTime())
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    console.log( daysDiff);
  }
}
