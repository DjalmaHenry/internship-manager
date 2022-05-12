const Student = require("./Student");
module.exports = class Report {
  constructor(
    id,
    Student,
    company,
    ocupation,
    status,
    internshipAvaliation,
    internshipCheckList
  ) {
    this.id = id;
    Student = Student;
    this.company = company;
    this.ocupation = ocupation;
    this.status = status;
    this.internshipAvaliation = internshipAvaliation;
    this.internshipCheckList = internshipCheckList;
  }

  get id() {
    return this.id;
  }
  set id(id) {
    this.id = id;
  }

  get Student() {
    return this.Student;
  }
  set Student(Student) {
    this.Student = Student;
  }

  get company() {
    return this.company;
  }
  set company(company) {
    this.company = company;
  }

  get ocupation() {
    return this.ocupation;
  }
  set ocupation(ocupation) {
    this.ocupation = ocupation;
  }

  get status() {
    return this.status;
  }
  set status(status) {
    this.status = status;
  }

  get internshipAvaliation() {
    return this.internshipAvaliation;
  }
  set internshipAvaliation(internshipAvaliation) {
    this.internshipAvaliation = internshipAvaliation;
  }

  get internshipCheckList() {
    return this.internshipCheckList;
  }
  set internshipCheckList(internshipCheckList) {
    this.internshipCheckList = internshipCheckList;
  }
};
