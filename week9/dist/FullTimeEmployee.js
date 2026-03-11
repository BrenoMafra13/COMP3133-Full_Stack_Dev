"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(eid, first_name, last_name, salary, designation) {
        var _this = _super.call(this, eid, first_name, last_name, salary) || this;
        _this.designation = designation;
        return _this;
    }
    FullTimeEmployee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Designation: ".concat(this.designation));
    };
    return FullTimeEmployee;
}(Employee_1.default));
exports.default = FullTimeEmployee;
