/**
 * A simple example of the factory design pattern in js.
 */

class Developer{
    constructor(name){
        this.name = name;
        this.type = "developer";
    }
}

class Tester{
    constructor(name){
        this.name = name;
        this.type = "tester";
    }
}

class EmployeeFactory{
    create(name, type){
        switch(type){
            case "developer":
                return new Developer(name);
            case "tester":
                return new Tester(name);
            default:
                throw new Error("Invalid employee type");
        }
    }
}

const employeeFactory = new EmployeeFactory();

const dev = employeeFactory.create("Alice", "developer");
const tester = employeeFactory.create("Bob", "tester");

console.log(dev);    // Developer { name: 'Alice', type: 'developer' }
console.log(tester); // Tester { name: 'Bob', type: 'tester' }
