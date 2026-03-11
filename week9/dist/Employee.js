"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(eid, first_name, last_name, salary) {
        this.eid = eid;
        this.first_name = first_name;
        this.last_name = last_name;
        this.salary = salary;
    }
    Employee.prototype.print = function () {
        console.log("Employee ID: ".concat(this.eid));
        console.log(JSON.stringify(this));
    };
    return Employee;
}());
exports.default = Employee;
