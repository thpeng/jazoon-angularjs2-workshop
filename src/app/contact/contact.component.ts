// src/app/contact/contact.ts
import {Component} from 'angular2/core';

@Component({
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
    
<div [hidden]="email.valid || email.pristine" class="alert alert-danger">Email is required</div>
    <label>Email:</label>
<input type="email" 
    ngControl="email"
     #email="ngForm" 
     required>
  <p><button type="submit" [disabled]="!f.form.valid">Submit</button></p>
    </form>`
})
export class Contact {
  model = {};
  onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
  }
}
