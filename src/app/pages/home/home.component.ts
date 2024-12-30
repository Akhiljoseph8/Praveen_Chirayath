import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses = [
    {
      title: 'Spoken English',
      instructor: 'Praveen Chirayath',
      rating: 4.5,
      reviews: 42241,
      price: 549,
      oldPrice: 2699,
      isBestSeller: true,
      image: '../../../assets/Screenshot 2024-12-30 102809.png', // Replace with actual image paths
    },
    {
      title: 'IELTS Coaching',
      instructor: 'Praveen Chirayath',
      rating: 4.5,
      reviews: 1705,
      price: 549,
      oldPrice: 3099,
      isBestSeller: false,
      image: '../../../assets/Screenshot 2024-12-30 102947.png',
    },
    {
      title: 'Employability skill Trainings',
      instructor: 'Praveen Chirayath',
      rating: 4.5,
      reviews: 442,
      price: 599,
      oldPrice: 799,
      isBestSeller: false,
      image: '../../../assets/Screenshot 2024-12-30 102851.png',
    },
   
  ];

  onNextSlide() {
    const slider = document.querySelector('.event-slider') as HTMLElement;
    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
  }

  onPrevSlide() {
    const slider = document.querySelector('.event-slider') as HTMLElement;
    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
  }
}
