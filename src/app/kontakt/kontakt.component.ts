import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {

  form: FormGroup;

  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: ['Admin', Validators.required],
      from_email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  send() {
    if (this.form.valid) {
      console.log(this.form.value);
      const templateParams = {
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
        to_name: 'Admin'
      };

      emailjs.send('service_cvdnyxh', 'template_altoc5n', templateParams, '31AZgS4eQhXe53KFj')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.error('FAILED...', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }




}

function send() {
  throw new Error('Function not implemented.');
}

