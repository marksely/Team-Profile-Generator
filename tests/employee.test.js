const Employee = require('../lib/employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns the name out of the data that is passed into", () => {
            const newEmployee = new Employee('alan',2,'alan@gmail.com');
            newEmployee.getName();
            expect(newEmployee.name).toBe('alan');
        });
    });
    describe("getId method", () => {
        it("returns the id of the employee", () => {
            const newEmployee = new Employee('alan',2,'alan@gmail.com');
            const id = newEmployee.getId();
            expect(newEmployee.id).toBe(2);
        });
    });
    describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            const newEmployee = new Employee('alan',2,'alan@gmail.com');
            const email = newEmployee.getEmail();
            expect(email).toBe('alan@gmail.com')
        });
    });
    describe("getRole method", () => {
        it("returns the role of the employee", () => {
            const newEmployee = new Employee('alan',2,'alan@gmail.com');
            const role = newEmployee.getRole();
            expect(role).toBe('employee');
        });
    });
});