import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
constructor(private readonly router: Router) {}
  course = ''
  public findCourse(): void {
    console.log(this.course)
  }



  enteredSearchValue = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  public searchCourse(): void {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  addCourse(): void {
    this.router.navigate(['courses/add-course']);
  }
}
