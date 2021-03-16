import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  reviews: Review[] = []  
  
  reviewAuthorInputValue: string
  reviewTextareaInputValue: string
  reviewRatingInputValue: number = 0; 

  fiveStarsRadioButtonValue: boolean
  fourStarsRadioButtonValue: boolean
  threeStarsRadioButtonValue: boolean
  twoStarsRadioButtonValue: boolean
  oneStarsRadioButtonValue: boolean

  constructor() { }

  ngOnInit(): void { }

    // Push author, rating, date and text into right side navigation through method
    addReview(): void {

      this.reviews.push({
        author: this.reviewAuthorInputValue,
        rating: this.reviewRatingInputValue,
        date: this.getDate(),
        text: this.reviewTextareaInputValue
      })
      
      // Empty input and textarea value after push
      this.reviewAuthorInputValue = ""
      this.reviewTextareaInputValue = ""
  
      // Empty value and uncheck radio button after push
      this.reviewRatingInputValue = 0
      this.fiveStarsRadioButtonValue = false
      this.fourStarsRadioButtonValue = false
      this.threeStarsRadioButtonValue = false
      this.twoStarsRadioButtonValue = false
      this.oneStarsRadioButtonValue = false
  
    }
  
    // Gets parameter HTML by onclick and puts it into "this.reviewRating"
    setRating(rating: number): void {
  
      this.reviewRatingInputValue = rating
  
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