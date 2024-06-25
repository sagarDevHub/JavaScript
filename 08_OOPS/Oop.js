const user = {
    username: "sagar",
    loginCount: 8, 
    signedin: true,
    getUseDetails : function(){
        console.log("Got user details from database");
    }
}

console.log(user.username);
console.log(user.getUseDetails());


// Constructors

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const useOne = new User("Hitesh", 12, true)
const useTwo = new User("Sagar", 12, true)

console.log(useOne.constructor);