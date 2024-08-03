import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICourse } from '../../../../types/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  
public courses: ICourse[]=[]
public ngOnInit(): void {
    this.courses = [
      {title: "CourseName",id: 1, creationDate: '2011-10-08',  duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},
      {title: "CourseName",id: 2, creationDate: '2011-10-08',  duration: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},
      {title: "CourseName",id: 3, creationDate: '2011-10-08',  duration: 30, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},
      {title: "CourseName",id: 4, creationDate: '2011-10-08',  duration: 50, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},
      {title: "bulbasaur",id: 5, creationDate: '2011-10-08',  duration: 40, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.'},
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

}

