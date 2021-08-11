import { CourseService } from './couser.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component ({
  templateUrl: './course-list.component.html'
})

export class CourserListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.CourseService.retriveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    });

  }

  deleteById(courserId: number): void {
    this.CourseService.deleteById(courserId).subscribe({
      next: () => {
        console.log("Delete with sucess");
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
