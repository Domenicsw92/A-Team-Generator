const { expect } = require("@jest/globals")
const Engineer = require("../lib/Enineer")

test("Updated role with Engineer.", () => {
    const E = new Engineer("name", "id", "email", "github")
    expect(E.getRole()).toBe('Engineer')
})

test("Can set a github username in the constructor.", () => {
    const github = "Domenicsw92@"
    const E = new Engineer("name", "id", "email", github)
    expect(E.getGithub() )
})