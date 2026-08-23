class Student {
  constructor(public name: string) {}
}

class Teacher {
  constructor(public name: string) {}
}

class School {
  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("--- THÔNG TIN TRƯỜNG HỌC ---");
    console.log("Danh sách giáo viên:", this.teachers.map(t => t.name).join(", "));
    console.log("Danh sách học sinh:", this.students.map(s => s.name).join(", "));
  }
}

const mySchool = new School();
mySchool.addTeacher(new Teacher("Thầy Minh"));
mySchool.addTeacher(new Teacher("Cô Hoa"));
mySchool.addStudent(new Student("Hoàng Trương Nhật"));
mySchool.addStudent(new Student("Nguyễn Văn A"));

mySchool.displayInfo();