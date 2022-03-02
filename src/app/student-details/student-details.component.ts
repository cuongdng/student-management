import { Component, OnInit } from '@angular/core';
import { students, Student } from '../student';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  student?: Student;
  editMode: boolean = true;

  dobRegexPattern =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  idRegexPattern = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

  getStudent(): void {
    let id;
    this.route.paramMap.subscribe((params) => {
      this.student = this.studentService.getStudent(params.get('id') || '');
    });
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
