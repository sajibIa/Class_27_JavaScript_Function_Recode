// Construstor

class Student{
    constructor(name,age,phone,address){
        this.name=name
        this.age=age
        this.phone=phone
        this.address=address
    }


}
class Student2 extends Student{
    constructor(name,age,phone,address,id,email){
        super(name,age,phone,address)
        this.id=id
        this.email=email

    }
}

let student=new Student("sajib",22,"354345","Narsingdi")
let studen2=new Student("tarak",40,"354345","Dhaka")
console.log(student);
console.log(studen2);

let student3=new Student2("hasan",20,"34534","narsingdi","345345","sajib343@gmil.com")
console.log(student3);