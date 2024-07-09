const sumArray = arr => arr.reduce( ( total, curent ) => total + curent, 0 );

let numbers = [ 1, 2, 3, 4, 5 ];

let sum = sumArray( numbers );
console.log( sum );
