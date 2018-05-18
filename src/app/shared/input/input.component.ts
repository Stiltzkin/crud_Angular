import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  ngIng: any;
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.ngIng = this.model

    if (this.ngIng === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel')
    }
  }

  hasSuccess() {
    return this.ngIng.valid && (this.ngIng.dirty || this.ngIng.touched)
  }

  hasError() {
    return this.ngIng.invalid && (this.ngIng.dirty || this.ngIng.touched)
  }
}
