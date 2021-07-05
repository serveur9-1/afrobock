import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-ecomm-checkout',
  templateUrl: './ecomm-checkout.component.html',
  styleUrls: ['./ecomm-checkout.component.scss']
})
export class EcommCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private startsWithAt(control: FormControl) {
    if (control.value.charAt(0) !== '@') {
      return {
        'startsWithAt@': true
      };
    }

    return null;
  }

  private endsWith$(control: FormControl) {
    if (control.value.charAt(control.value.length - 1) !== '$') {
      return {
        'endsWith$': true
      };
    }

    return null;
  }
}
