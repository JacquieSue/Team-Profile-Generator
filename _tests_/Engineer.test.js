// getGitHub(), getRole()
const Employee = require("../lib/Employee");

test("Can get employee name", () => {
    const name = 'Bob';
    const test = new Employee(name);
    expect(test.getName()).toBe(name);
});
test("Can get employee id", () => {
    const id = '10';
    const test = new Employee(id);
    expect(test.getId()).toBe(id);
});
test("Can get employee email", () => {
    const email = 'bob@test.com';
    const test = new Employee(email);
    expect(test.getEmail()).toBe(email);
});
test("Can get employee email", () => {
    const role = 'employee';
    const test = new Employee(employee);
    expect(test.getRole()).toBe(employee);
});