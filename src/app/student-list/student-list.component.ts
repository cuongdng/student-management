import { Component, OnInit } from '@angular/core';
import { Student, students } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(student: Student, event: Event): void {
    if (confirm('Are you sure to delete this student?')) {
      event.stopPropagation();
      this.studentService.deleteStudent(student);
    } else {
      event.stopPropagation();
    }
  }

  ngOnInit(): void {
    this.getStudents();
  }
}
