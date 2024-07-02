// !# usr/bin/nod
import inquirer from "inquirer";
class student{
    name : string
    constructor(n:string) { this.name=n}
}

class person{
    students:student[]=[]
addStudent(obj:student){
    this.students.push(obj)
}
}
const persons=new person

const programStart = async(persons:person)=>{
    console.log(`WELCOME TO MY OBJECT ORIENTED PROGRAMMING`)
const ans = await inquirer.prompt({
    name:'select',
    type:'list',
    message: 'whom would you like to interact with?',
    choices:["staff","student","Exit"]
})
if(ans.select == 'staff'){
    console.log("you approach the staff room. please feel free to ask any question.")
}
 else if (ans.select =='student'){
    const ans = await inquirer.prompt
    (
        {
            name : "student",
            type:  "input",
            message : "Enter the student's name you wish to engaged with:"
        }
    )
    const student = persons.students.find(val => val.name == ans.student)
}
if(!student)
    {
        const name = new student (ans.student)
        persons.addStudent(name)
        console.log(`Hello i am ${name.name} nice to met you`)
        console.log ("New student added");
        console.log (`current student list:`)
        console.log(persons.students)
    }else {
             console.log(`Hello i am ${student.name} nice to see you again!`)
             console.log("Exiting student list....")
             console.log(persons.students);
 } if (ans.select == "Exit"){
        console.log("Exiting  the program....")
        process.exit()
    }

}

programStart(persons)