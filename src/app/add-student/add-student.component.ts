import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {}

  dobRegexPattern =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  idRegexPattern = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

  newStudent = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    id: ['', [Validators.required, Validators.pattern(this.idRegexPattern)]],
    dob: ['', [Validators.required, Validators.pattern(this.dobRegexPattern)]],
    address: ['', [Validators.required]],
  });

  get form() {
    return this.newStudent.controls;
  }

  onAddSubmit(): void {
    this.studentService.addStudent(this.newStudent.value);
    alert('This student has been added!');
    this.newStudent.reset();
  }

  ngOnInit(): void {}
}
