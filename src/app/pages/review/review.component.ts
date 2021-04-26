import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Review } from 'src/app/models/review';
import { ReviewApiService } from 'src/app/services/review.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  reviews: Review[] = []  

  reviewForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12)
    ]),
    text: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000)
    ]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  })

  constructor(private reviewApiService: ReviewApiService) { }

  ngOnInit(): void {
    this.reviewApiService.getAll().subscribe((reviews) => {
      this.reviews = reviews
    })
  }

    // Push author, rating, date and text into right side navigation through method
    addReview(): void {

      this.reviews.push({
        name: this.reviewForm.get('name').value,
        text: this.reviewForm.get('text').value,
        rating: this.reviewForm.get('rating').value,
        date: this.getDate(),
      })
      
      // Empty input, textarea and rating value after push
      this.reviewForm.setValue({
        'name': '',
        'text': '',
        'rating': ''
      })
    }
    
    // Gets current date
    private getDate(): string {
  
        const date = new Date()
        const monthNumber = date.getMonth()
        const monthText = this.getMonthName(monthNumber)
        const dayOfMonth = `${date.getDate()}th`
        const year = date.getFullYear()
  
        // Converts date into custom style
        const dateString = `${monthText} ${dayOfMonth}, ${year}`
  
        return dateString
    }
  
    // Gets month value by parameter and converts it into monthNames through array
    private getMonthName(month: number): string {
  
      const monthNames: string[] = [
        "January", // 0
        "February", // 1
        "March", // 2
        "April", // 3
        "May", // 4
        "June", // 5
        "July", // 6
        "August", // 7
        "September", // 8
        "October", // 9
        "November", // 10
        "December" // 11
      ]
  
      return monthNames[month]
    }

}