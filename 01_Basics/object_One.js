const mySym = Symbol("key1");

const jsUser = {
    name: "sagar",
    "full name" : "Sagar Gulla",
    mySym: "myKey1", // Wrong Symbol keyword declaration
    [mySym]: "myKey1", // Correct Symbol keyword declaration
    isLoggedIn: "true",
    lastLogIn: ["Monday", "Sunday"]
}

// to access special datatype like Symbol or spaced variable we have to use double quotes
console.log(jsUser[mySym]);
console.log(jsUser["full name"]);

// crating functions in objects

jsUser.greet = function(){
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greet());

console.log(jsUser);