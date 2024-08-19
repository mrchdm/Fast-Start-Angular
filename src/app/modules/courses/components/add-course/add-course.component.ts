import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {

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
}
