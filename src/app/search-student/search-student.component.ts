import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss'],
})
export class SearchStudentComponent implements OnInit {
  allStudents: Student[] = this.studentService.getStudents();
  searching: Student[] = [];

  resetResult(): void {
    this.searching = [];
  }

  search(value: string): void {
    if (value.trim() !== '') {
      this.searching = this.allStudents.filter(
        (student) =>
          student.fullName.toLowerCase().includes(value) ||
          student.id.toLowerCase().includes(value) ||
          student.dob.includes(value.toUpperCase())
      );
    } else {
      this.resetResult();
    }
  }

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}
}
