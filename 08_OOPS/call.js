function setUserName(username) {
    this.username = username;
}

function createUser (username, email, password){

    // Call is use to pass the current ececution context to other 
    setUserName.call(this, username)

    this.email = email;
    this.password = password;
}


const chai = new createUser("chai", "Chai@gmail.com", "123");
console.log(chai);