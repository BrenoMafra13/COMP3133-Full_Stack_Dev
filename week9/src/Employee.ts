class Employee {
    eid: number
    first_name: string
    last_name: string
    salary: number

    constructor(eid: number,
        first_name: string,
        last_name: string,
        salary: number) {
            this.eid = eid
            this.first_name = first_name
            this.last_name = last_name
            this.salary = salary
    }

    print():void {
        console.log(`Employee ID: ${this.eid}`)
        console.log(JSON.stringify(this))
    }
}

export default Employee