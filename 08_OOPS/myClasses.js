class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const user = new User("Chai", "Chai@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.changeUserName());


// Behind the scene

// function User (username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }


// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`;
// }

// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const user = new User("Chai", "Chai@gmail.com", "123");
// console.log(user.encryptPassword());
// console.log(user.changeUserName());