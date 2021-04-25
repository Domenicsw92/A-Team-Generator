const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const fs = require('fs');
const util = require("util")

const writeFile = util.promisify(fs.writeFile) 
const readFile = util.promisify(fs.readFile)


function draftTemplate(template , key, value){
    const info = new RegExp("{{"+key+"}}");
    const newTemplate = template.replace(info,value);
    return newTemplate

}

async function buildHtml(Member){
    const teamArry =[]
    const[Managertemp, MainTemp, Interntemp, Engineertemp] = await Promise.all([
        readFile(__dirname  + "/Managertemp.html", "utf8"),
        readFile(__dirname  + "/MainTemp.html", "utf8"),
        readFile(__dirname  + "/Interntemp.html", "utf8"),
        readFile(__dirname  + "/Engineertemp.html", "utf8"),
    ])
    const internCard = Member.filter(employee => employee instanceof Intern).map(employee =>
        {let template = Interntemp;
            for (const key in employee){
                template = draftTemplate(template, key, employee[key])
            }
            return template
        })
    const engineerCard = Member.filter(employee => employee instanceof Engineer).map(employee =>
        {let template = Engineertemp;
            for (const key in employee){
                template = draftTemplate(template, key, employee[key])
            }
            return template
        })
    const managerCard = Member.filter(employee => employee instanceof Manager).map(employee =>
        {let template = Managertemp;
            for (const key in employee){
                template = draftTemplate(template, key, employee[key])
            }
            return template
        })
        teamArry.push(managerCard, internCard, engineerCard)
        const generatedTeamHtml = draftTemplate(MainTemp, "body" ,teamArry.join(""))
        await writeFile("Team.html", generatedTeamHtml, function(err){
            if(err) throw err
        })
}

module.exports = buildHtml


