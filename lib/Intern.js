class Intern {
    constructor ( title, name , id , email, github, school){
    this.title = title;
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.school = school;
}
getTitle(){
    return this.title
} 

getName(){
    return this.name
}
getId(){
   return this.id
}

getEmail(){
    return this.email
}

getGithub(){
    return this.github
}

getSchool(){
    return this.school
}
}

module.exports = Intern

