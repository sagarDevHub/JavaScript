const regularUser = {
    email: "sagar@gmail.com",
    fullname: {
        firstName:"sagar",
        lastName:"gulla"
    }
}

console.log(regularUser.fullname.firstName);

const obj1 = {
    1:"A",
    2:"B",
    3:"C"
}
const obj2 = {
    4:"D",
    5:"E",
    6:"F"
}
const obj3 = {
    7:"G",
    8:"H",
    9:"I"
}

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

// combining three or more objects
const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj5);

//taking all the keys
console.log(Object.keys(obj1));

//taking all the values
console.log(Object.values(obj1));

//taking all the entries
console.log(Object.entries(obj1));

// cheking condition
console.log(regularUser.hasOwnProperty('name'));


//object destructure
const {email} = regularUser;
console.log(email);

//asigning variable name to the object
const {email: mail} = regularUser;
console.log(mail);
