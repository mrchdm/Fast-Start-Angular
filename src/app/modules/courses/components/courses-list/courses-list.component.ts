import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICourse } from '../../../../types/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {

public searchText: string = '';
public courses: ICourse[]=[]
public ngOnInit(): void {
    this.courses = [
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2023, 8 ,8),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},  
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2023, 0 ,1),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'}, 
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2015, 0 ,8),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'}, 
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2025, 12 ,20),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'}, 
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2024, 8 ,20),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'}, 
      {title: "CourseName", id: 1, topRated: true,creationDate: new Date(2024, 7 ,13),  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'}, 
   
    ]
}

public loadMore(): void{
  console.log('load more');
}

public editCourse(course: ICourse): void {
 console.log(course);
}

public deleteCourse(course: ICourse): void {
  console.log(course.id);
 }

 public onSearchTextEntered(searchValue: string) {
  this.searchText = searchValue;} 
}

