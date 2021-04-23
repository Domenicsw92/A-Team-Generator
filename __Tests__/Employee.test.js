//const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee")

test("Can create an employee out of the constructors.", () =>{
    const eT = new Employee("name", "id", "email")
    expect (typeof(eT)).toBe("object")
})


test ("Can set a name in the constructors." , () =>{
    const name = "Domenic"
    const eT = new Employee(name, "id", "email")
    expect (eT.getName()).toBe(name) 
}) 

test ("Can set a id in the constructors." , () =>{
    const id = "100"
    const eT = new Employee("name", id, "email")
    expect (eT.getId()).toBe(id) 
})

test ("Can set a name in the constructors." , () =>{
    const email = "TheTest@gmail.com"
    const eT = new Employee("name", "id", email )
    expect (eT.getEmail()).toBe(email)
})

test ("The Employee has a role of employee." , () =>{
    const eT = new Employee("name", "id", "email" )
    expect (eT.getRole()).toBe('Employee') 
});

