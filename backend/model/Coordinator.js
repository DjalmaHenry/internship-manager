const Contact = require("./Contact");
module.exports = class Coordinator {
  constructor(name, ID, password, studentsList) {
    this.name = name;
    this.id = ID;
    this.password = password;
    this.Contact = Contact;
    this.studentsList = studentsList;
  }

  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }

  get id() {
    return this.id;
  }
  set id(id) {
    this.id = id;
  }

  get password() {
    return this.password;
  }
  set password(password) {
    this.password = password;
  }

  get Contact() {
    return this.contact;
  }
  set Contact(contact) {
    this.Contact = contact;
  }

  get studentsList() {
    return this.studentsList;
  }
  set studentsList(studentsList) {
    this.studentsList = studentsList;
  }
};
