const Student = require("./Student");
const Company = require("./Company");
const Ocupation = require("./Ocupation");
const Sequelize = require('sequelize')
const conn = require('../database/database')

const Report = conn.define('student_reports', {
    studentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    companyId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ocupationId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    internship_avaliation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    internship_checklist: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Report.sync({ force: false }).then(() => {
    console.log("report table retrieved")
})
module.exports = Report






/*
module.exports = class Report {
  constructor(id, status, internshipAvaliation, internshipCheckList) {
    this.id = id;
    this.Student = Student;
    this.Company = Company;
    this.Ocupation = Ocupation;
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
  set Student(student) {
    this.Student = student;
  }

  get Company() {
    return this.Company;
  }
  set Company(company) {
    this.Company = company;
  }

  get Ocupation() {
    return this.Ocupation;
  }
  set Ocupation(ocupation) {
    this.Ocupation = ocupation;
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
*/