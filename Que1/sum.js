
const sum = function( arr ) {    
let result = 0;
    for ( i = 0; i < arr.length; i++ ) {
            result += arr[ i ];
           
        }
    return result;
}
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
console.log(sum(arr));