class Teacher {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `teacher: ${this.name}`;
  }
}

class TeacherDecorator {
  constructor(teacher) {
    this.teacher = teacher;
  }
  getInfo() {
    return this.teacher.getInfo();
  }
}

class SalaryDecorator extends TeacherDecorator {
  constructor(teacher, salary) {
    super(teacher);
    this.salary=salary;
  }

  getInfo() {
    return `${super.getInfo()}, salary: ${this.salary}`;
  }
}

class NationalityDecorator extends TeacherDecorator {
  constructor(teacher, nationality) {
    super(teacher);
    this.nationality = nationality;
  }

  getInfo() {
    return `${super.getInfo()}, nationality: ${this.nationality}`;
  }
}


class StreetDecorator extends TeacherDecorator{
    constructor(teacher, street){
        super(teacher);
        this.street = street;
    }

    getInfo(){
        return `${super.getInfo()}, street: ${this.street}`;
    }
}


let teacher = new Teacher("mazen");

teacher = new SalaryDecorator(teacher, 5000);

teacher = new NationalityDecorator(teacher,"egyptian");

teacher = new StreetDecorator(teacher,"masr el gdida");

console.log(teacher.getInfo());