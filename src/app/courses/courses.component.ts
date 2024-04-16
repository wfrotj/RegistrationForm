import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  searchValue: string = '';

  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  courses = [
    {
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Jane Smith',
      duration: '8 weeks',
      level: 'Beginner',
      remarks: 'Open',
    },
    {
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. John Doe',
      duration: '10 weeks',
      level: 'Intermediate',
      remarks: 'Open',
    },
    {
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Emily Brown',
      duration: '12 weeks',
      level: 'Advanced',
      remarks: 'Closed',
    },
    {
      title: 'Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      duration: '6 weeks',
      level: 'Intermediate',
      remarks: 'Closed',
    },
  ];
}
