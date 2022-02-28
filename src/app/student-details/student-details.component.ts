import { Component, OnInit } from '@angular/core';
import { students, Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  student?: Student;
  editMode: boolean = true;

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudent(id);
    console.log(this.student);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getStudent();
    this.editMode = false;
  }
}
