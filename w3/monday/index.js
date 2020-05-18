const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Print out an array of the inventors whose name starts with 'A'.
let listA = inventors.filter(x => x.startsWith('A'));
console.log(listA);

//Print out an array of the inventors whose name contains 'n'.
let listn = inventors.filter(x => x.includes('n'));
console.log(listn);

//Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let listDouble = inventors.filter((x) => {
    let result = x.match(/(.)\1+/g);
    return result != null;
})
console.log(listDouble);

//Print out an array of the numbers which are odd.
let listOdd = numbers.filter(x => x % 2 == 0);
console.log(listOdd);

//Print out an array of the numbers that have two digits.
let list2Diggits = numbers.filter(x => Math.abs(x) > 9 && Math.abs(x) < 100);
console.log(list2Diggits);

//Print out an array of the numbers which are prime
let listPrime = numbers.filter((n) => {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
});

console.log(listPrime);


//Print out the first name of each inventor.
inventors.map(x => console.log(x[0]));

//Print out the length of every inventor's full name.
inventors.map(x => console.log(x.length));

//Print out all the inventors' names in uppercase.

inventors.map(x => console.log(x.toUpperCase()));

//Print out initials of all inventors(e.g. A.E., I.N., ...)
inventors.map(x => console.log(x[0].charAt(0)));

//Print out an array of every number multiplied by 100.
numbers.map(x => console.log(x * 100));


//Sort all the inventors in alphabetical order, A-Z.
let sortAlpha = inventors.slice(0).sort();
console.log(sortAlpha);

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let sortAlphaReverse = inventors.slice(0).sort(function (a, b) {
    return b.localeCompare(a);
});
console.log(sortAlphaReverse);
//Sort all the inventors by length of name, shortest name first.

let shortNames = inventors.slice(0).sort(function(a, b) {
    return a.length - b.length;
});
console.log(shortNames);

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
let longNames = inventors.slice(0).sort(function(a, b) {
    return b.length - a.length;
});
console.log(longNames);

//Find the sum of all the numbers.
let sum = numbers.reduce(function(total, x) {
    return total + x;
})
console.log(sum);
//Find the sum of all the even numbers.
let sumEven = numbers.filter(x => x%2 == 0).reduce(function(total, x) {
    return total + x;
})
console.log(sumEven);

//Create a string that has the first name of every inventor.
let sumString = inventors.map(x => x.charAt(0)).reduce(function(total, x) {
    return total + x;
})
console.log(sumString);

//Does any inventor have the letter 'y' in their name?
let listY = inventors.some(x => x.includes('y') || x.includes('Y'));
console.log(listY);
//Does every inventor have the letter 'e' in their name?
let listE = inventors.some(x => x.includes('e') || x.includes('E'));
console.log(listE);

//Does every inventor have first name that's longer than 4 characters?
let list4 = inventors.some(x => {
    let split =  x.split(" ");
    if (split != null && split.length > 0) {
        let first = split[0];
        return first.length > 4;
    }
    return false;

});
console.log(list4);

//Find the inventor that has a middle name.
let listMiddle = inventors.filter(x => {
    let split =  x.split(" ");
    if (split != null && split.length > 2) {
        return true;
    } else {
        return false;
    }
})
console.log(listMiddle);

//Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
console.log(listMiddle);

//Find the number divisible by 7.
let list70 = numbers.filter(x => x%7 == 0);
console.log(list70);

//Bonus: Return a new array, that only has the numbers that are not divisible by 7.
let list71 = numbers.filter(x => x%7 != 0);
console.log(list71);