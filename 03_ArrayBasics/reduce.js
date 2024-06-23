const myNums = [1, 2, 3, 4];


// reduce method always takes 2 parameters. They are accumulator and currentValue.
// accumulator must and should ne initialized with a value called initial value.
// so the syntax would be --->

// initialValue = 0;
// .reduce((acc, curVal) => {

//  })

// or

// .reduce((acc, curVal) => {

//  }, initialValue);


const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 3999
    },
    {
        itemName : "Java course",
        price : 4999
    },
    {
        itemName : "DSA course",
        price : 5999
    }
]

const amountToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0);
console.log(amountToPay);