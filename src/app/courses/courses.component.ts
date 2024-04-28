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
    {
      title: 'Artificial Intelligence: A Modern Approach',
      instructor: 'Dr. Michael Wang',
      duration: '12 weeks',
      level: 'Advanced',
      remarks: 'Open',
    },
    {
      title: 'Software Engineering Principles',
      instructor: 'Prof. Lisa Johnson',
      duration: '8 weeks',
      level: 'Intermediate',
      remarks: 'Open',
    },
    {
      title: 'Digital Marketing Fundamentals',
      instructor: 'John Smith',
      duration: '6 weeks',
      level: 'Beginner',
      remarks: 'Open',
    },
    {
      title: 'Introduction to Psychology',
      instructor: 'Dr. Anna White',
      duration: '10 weeks',
      level: 'Beginner',
      remarks: 'Closed',
    },
  ];
  getAllCourses() {
    return this.courses.length;
  }
  getAllBeginnerCourses() {
    return this.courses.filter((course) => course.level === 'Beginner').length;
  }
  getAllIntermediateCourses() {
    return this.courses.filter((course) => course.level === 'Intermediate')
      .length;
  }
  getAllAdvancedCourses() {
    return this.courses.filter((course) => course.level === 'Advanced').length;
  }
  // getAllOpenCourses() {
  //   return this.courses.filter((course) => course.remarks === 'Open').length;
  // }
  // getAllClosedCourses() {
  //   return this.courses.filter((course) => course.remarks === 'Closed').length;
  // }

  courseCountRadioButtonChange: string = 'All';
  // courseCountRemarksRadioButtonChange: string = '';
  searchText: string = '';
  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButtonChange = data;
  }
  // onFilterRemarksRadioButtonChanged(data: string) {
  //   this.courseCountRemarksRadioButtonChange = data;
  // }
  onSearchTextChanged(searchValue: string) {
    this.searchText = searchValue;
  }
}
