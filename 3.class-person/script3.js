//write "person" class to hold all details

class Person{
    constructor(firstName, lastName, age, email, mobileNumber, place, education) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email,
            this.mobileNumber = mobileNumber,
            this.place = place,
            this.education= education
    }

}

const person1 = new Person("Sophia", "Paulin", 27, "sobiyamary622@gmail.com", 8220505163, "Tirunelveli", "M.A, M.Ed")

console.log(person1)