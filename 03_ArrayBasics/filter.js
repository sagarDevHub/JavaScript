const coding = ["js", "python", "c++", "java"];

// forEach doesn't returns values it only prints the value.

const values = coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);
})

console.log(values); // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter never prints the values it returns a value

const newNums = myNums.filter( (num) => {
    return num > 4;
} )
console.log(newNums);