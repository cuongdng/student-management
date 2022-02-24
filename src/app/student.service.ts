import { Injectable } from '@angular/core';

import { Student, students } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudents(): Student[] {
    return students;
  }

  getStudent(id: number): Student {
    const student = students.find((student) => student.id === id)!;
    return student;
  }

  constructor() {}
}
