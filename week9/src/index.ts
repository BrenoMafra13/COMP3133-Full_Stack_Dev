import Person from "./person"
import Employee from "./Employee"
import FullTimeEmployee from "./FullTimeEmployee"

console.log("Hello TypeScript Programming")
console.log("Hello TypeScript Programming")
let sname:string = "Pritesh Patel"
let city:String = "Toronto"
let a:number
let b:boolean
let c:object
let d:any
let e:never

let x = 100
console.log(typeof x)
// x = "hello" //error

var person: Person = {
    pid: 1,
    fnm: "Pritesh",
    lnm: "Patel",
    city: "New York"
}

//Union
var nameOrNumber: string | number
nameOrNumber = "GBC"
nameOrNumber = 100
// nameOrNumber = false // Error

//Type 
type Student = {
    sid: number
    sfname: string
    slname: string
}

//Intersect
type FullTime = {
    noOfClass: number
    department: string
}

var s1: Student = {
    sid: 1,
    sfname: "Fname",
    slname: "Lname"
}

var sft: Student &  FullTime
sft = {
    sid: 1,
    sfname: "Fname",
    slname: "Lname",
    noOfClass: 10,
    department: "CS"
}

// type PTorFT =  "PT" | "FT"

let ft1: Employee
ft1 = new FullTimeEmployee(1, "Breno", "Mafra", 10000, "Software Engineer")
ft1.print()

// class Test implemenmts Person {
//     pid: number
//     fnm: string
//     lnm: string
//     city: string
// }