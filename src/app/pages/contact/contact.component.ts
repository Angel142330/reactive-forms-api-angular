import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


  contactForm!: FormGroup; //! Signo de ! significa que nos comprometemos que nuca va a ser null

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]

    })

  }


  ngOnInit(): void {

  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

   //! Creamos un metodo que nos permite saber si un campo tiene un error y si fue tocado 
   hasErrors(controlName: string, errorType: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched;
  }
}
