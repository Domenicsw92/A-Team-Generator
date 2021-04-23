const Intern = require("../lib/Intern")

test("Updated role with Intern.", () => {
    const eT = new Intern("name", "id", "email", "github","school")
    expect(eT.getRole()).toBe('Intern')
})

test("Can set a github username in the constructor.", () => {
    const github = "Domenicsw92"
    const eT = new Intern("name", "id", "email", github, "school" )
    expect(eT.getGithub()).toBe(github)
})
test("Can set a school name in the constructor for Intern.", () => {
    const school = "Denver University"
    const eT = new Intern("name", "id", "email", "github", school )
    expect(eT.getSchool()).toBe(school)
})

