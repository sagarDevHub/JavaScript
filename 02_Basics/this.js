const user = {
    username: "sagar",
    price:"999",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();

//changing the context
user.username = "sam";
user.welcomeMessage();


let char = function(){
    let username = "Sagar";
    console.log(this);

    console.log(username);
    //undefined
    console.log(this.username);
}

chai();