const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name,id,email){
        super(name,id,email)
        this.officeNumber = officeNumber;
        this.role = 'Manager';

    }

    getGithub(){
        return this.officeNumber;
    };

    getRole(){
        return this.role;
    };
};

module.export = Employee;