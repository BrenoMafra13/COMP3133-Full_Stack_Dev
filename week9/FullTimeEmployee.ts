import Employee from "./src/Employee";

class FullTimeEmployee extends Employee {
    designation: string

        constructor(eid: number,
        first_name: string,
        last_name: string,
        salary: number,
        designation: string) {
            super(eid, first_name, last_name, salary)
            this.designation = designation
    }

    print(): void {
        super.print()
        console.log(`Designation: ${this.designation}`)
    }
}

export default FullTimeEmployee