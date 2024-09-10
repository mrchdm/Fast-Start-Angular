import { Injectable } from '@angular/core';
import { ICourse } from '../../../types/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: ICourse[] = [
    { title: "CourseName", id: 1, topRated: true, creationDate: new Date(2023, 8, 8), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
    { title: "CourseName", id: 2, topRated: true, creationDate: new Date(2023, 0, 1), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
    { title: "CourseName", id: 3, topRated: true, creationDate: new Date(2015, 0, 8), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
    { title: "CourseName", id: 4, topRated: true, creationDate: new Date(2025, 12, 20), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
    { title: "CourseName", id: 5, topRated: true, creationDate: new Date(2024, 8, 20), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
    { title: "CourseName", id: 6, topRated: true, creationDate: new Date(2024, 7, 13), duration: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo, dignissimos quas quam reprehenderit doloribus ipsum ullam aliquid, quod saepe voluptates laborum officia vitae a sapiente. Ducimus perferendis impedit quam.' },
  ]
  constructor() { }
  public getList(): ICourse[] {
    return this.courses
  }
  public createCourse(course: ICourse): void {
    this.courses.push(course)
  }
  public getItemById(id: number): ICourse | undefined {
    return this.courses.find(x => x.id == id);
  }
  public updateItem(id: number, newData: ICourse): void {
    let item: ICourse | undefined = this.getItemById(id);
    if (!item) return;
    item.title = newData.title;
    item.topRated = newData.topRated;
    item.creationDate = newData.creationDate;
    item.duration = newData.duration;
    item.description = newData.description;
  }
  public removeItem(course: ICourse): ICourse[] {
    return this.courses = this.courses.filter(c => c.id != course.id)
  }


}
