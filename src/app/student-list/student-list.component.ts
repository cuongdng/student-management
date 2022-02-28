import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit, AfterContentInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}
  ngAfterContentInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(student: Student, event: Event): void {
    if (confirm('Are you sure to delete this student?')) {
      event.stopPropagation();
      this.studentService.deleteStudent(student);
      this.getStudents();
    } else {
      event.stopPropagation();
    }
  }

  ngOnInit(): void {
    this.getStudents();
  }
}
