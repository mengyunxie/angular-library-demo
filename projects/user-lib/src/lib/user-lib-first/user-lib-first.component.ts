import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'lib-user-lib-first',
  templateUrl: './user-lib-first.component.html',
  styleUrls: ['./user-lib-first.component.css']
})
export class UserLibFirstComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
  // Object.values(this.validateForm.controls).forEach(control => {
  //     control.markAsDirty();
  //     control.updateValueAndValidity();
  // });
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

}
