const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((num) => {
    return num+10
})

console.log(newArr);

// chaining 

newArr = arr
            .map((num) => num*10)
            .map((num)=>num+10)
            .filter((num) => num >= 40)



console.log(newArr);