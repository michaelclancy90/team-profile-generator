const Employee = require("./employee")

class Intern extends Employee {
    constructor(name,id,email){
        super(name,id,email)
        this.school = school;
        this.role = 'Intern';

    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return this.role;
    };
};

module.export = Employee;