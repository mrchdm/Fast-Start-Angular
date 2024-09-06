import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICourse } from '../../../../types/course';
import { CoursesService } from '../../services/courses.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
  providers: [ConfirmationService], 
})
export class CoursesListComponent implements OnInit {

  public searchText: string = '';
  public courses: ICourse[] = []
  constructor(public readonly coursesService: CoursesService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }
  public ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  public loadMore(): void {
    console.log('load more');
  }

  public editCourse(course: ICourse): void {
    console.log(course);
  }

  public deleteCourse(course: ICourse): void {
    this.coursesService.removeItem(course);
    this.courses = this.coursesService.getList()
    console.log('удалили курс')
  }

  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }



  deleteCourseConfirmDialog(course: ICourse) {
     
    this.confirmationService.confirm({
    message: `Вы уверены, что хотите удалить курс ${course.title} ?`,
    header: 'Удалить курс',
    defaultFocus: "none", 
    dismissableMask: true,
    accept: () => this.deleteCourse(course),
    acceptButtonStyleClass: 'p-button-danger',
    acceptLabel: 'Удалить',
    acceptIcon: 'null',
    reject: () => this.confirmationService.close(),
    rejectLabel: 'Отмена',
    rejectButtonStyleClass: 'p-button-text',
    rejectIcon: 'null'
  }); }

}

