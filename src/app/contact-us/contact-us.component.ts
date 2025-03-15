import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactFormData = {
    name: '',
    email: '',
    country: '',
    city: '',
    subject: '',
    message: ''
  };

  isLoading = false; // Loading state to prevent multiple submissions

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    this.isLoading = true;

    emailjs.send('service_41wsxyb', 'template_tzcu5eb', this.contactFormData, '7_KcqfgATl6qe3Etd')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        contactForm.resetForm(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
