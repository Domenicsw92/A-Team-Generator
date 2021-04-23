const Engineer = require("../lib/Engineer")

test("Updated role with Engineer.", () => {
    const eT = new Engineer("name", "id", "email", "github")
    expect(eT.getRole()).toBe('Engineer')
})

test("Can set a github username in the constructor.", () => {
    const github = "Domenicsw92"
    const eT = new Engineer("name", "id", "email", github )
    expect(eT.getGithub()).toBe(github)
})
