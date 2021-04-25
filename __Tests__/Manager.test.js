const Manager = require("../lib/Manager")

test("Updated role with Manager.", () => {
    const eT = new Manager("name", "id", "email", "officeNumber")
    expect(eT.getRole()).toBe('Manager')
})

test("Can set a github username in the constructor.", () => {
    const officeNumber = 123123123
    const eT = new Manager("name", "id", "email", officeNumber )
    expect(eT.getOfficeNumber()).toBe(officeNumber)
})
