const numbers = [15, 4, 11, 27, 56, 10, 4, 7, 14, 25, 66, 33];
const users = ['martha', 'eve', 'johnny', 'thedude', 'onyxx', 'dagesus', 'duckling44'];
const furniture = [{
        name: 'Table',
        price: 100,
        available: true,
    },
    {
        name: 'Chair',
        price: 20,
        available: false,
    },
    {
        name: 'Bookshelf',
        price: 55,
        available: true,
    },
    {
        name: 'Sofa',
        price: 1200,
        available: true,
    },
    {
        name: 'Coffeetable',
        price: 45,
        available: false,
    },
    {
        name: 'Bed',
        price: 800,
        available: false,
    },
    {
        name: 'Nightstand',
        price: 12,
        available: true,
    },
];

// numbers.map(res => console.log(res - 13));
// numbers.map(res => console.log(res * 2));

// users.map(res => console.log(res.length));
// furniture.map(res => console.log(`the price is ${res.price}`));

let cheap = [];
let res = furniture.filter(item => item.price < 120);
// console.log(res);

let available = furniture.filter(item => item.available);
// console.log(available);


// long string
cheapExpensive = {
    cheap: [],
    expensive: []
}


let result = furniture.reduce(
    (acc, x) => {
        x.price < 120 ? acc.cheap.push(x) : acc.expensive.push(x);
        return acc;
    }, cheapExpensive);
    
// console.log(result, typeof result);

// console.log(cheapExpensive[0])
// console.log(cheapExpensive[1])

// sum all prices 
// let result = numbers.reduce((acc, x) => acc + x);
// console.log(result, typeof result);