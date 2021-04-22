class Employee {
    constructor ( title, name , id , email, github){
    this.title = title;
    this.name = name;
    this.id = id;
    this.email = email
    this.github = github
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

}

module.exports = Employee
