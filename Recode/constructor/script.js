// Constructor

function Student(name,age,phone){
    this.name=name
    this.age=age
    this.phone=phone
    this.output=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.phone);

    }
}

let student0=new Student("sajib",22,"35345")
let student1=new Student("sajib1",22,"35345")
let student2=new Student("sajib2",22,"35345")
let student3=new Student("tarak",22,"35345")
student0.output()
student1.output()

// console.log(student1);
// console.log(student2);
// console.log(student3);