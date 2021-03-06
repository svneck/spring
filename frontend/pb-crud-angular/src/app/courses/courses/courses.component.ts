import { Component, OnInit } from '@angular/core';

import { Course } from './../models/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []
  displayedColumns = ['name', 'category'];

  constructor(private CoursesService: CoursesService) {
    this.courses = this.CoursesService.list();
  }

  ngOnInit(): void {
  }

}
