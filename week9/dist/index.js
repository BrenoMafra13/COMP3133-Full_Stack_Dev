"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullTimeEmployee_1 = require("./FullTimeEmployee");
console.log("Hello TypeScript Programming");
console.log("Hello TypeScript Programming");
var sname = "Pritesh Patel";
var city = "Toronto";
var a;
var b;
var c;
var d;
var e;
var x = 100;
console.log(typeof x);
// x = "hello" //error
var person = {
    pid: 1,
    fnm: "Pritesh",
    lnm: "Patel",
    city: "New York"
};
//Union
var nameOrNumber;
nameOrNumber = "GBC";
nameOrNumber = 100;
var s1 = {
    sid: 1,
    sfname: "Fname",
    slname: "Lname"
};
var sft;
sft = {
    sid: 1,
    sfname: "Fname",
    slname: "Lname",
    noOfClass: 10,
    department: "CS"
};
// type PTorFT =  "PT" | "FT"
var ft1;
ft1 = new FullTimeEmployee_1.default(1, "Breno", "Mafra", 10000, "Software Engineer");
ft1.print();
