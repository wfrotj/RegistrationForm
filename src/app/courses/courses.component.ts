import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses = [
    {
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Jane Smith',
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. John Doe',
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. Emily Brown',
      duration: '12 weeks',
      level: 'Advanced',
    },
    {
      title: 'Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      duration: '6 weeks',
      level: 'Intermediate',
    },
  ];
}
