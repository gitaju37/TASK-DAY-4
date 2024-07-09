let wordsArray = [ "level", "Guvi", "Ajith", "radar", "Pradheep", "madam", "civic", ];
const palindrome = arr => {
    let ans = [];
    for ( let i of arr ) {
        let j = i.split( '' ).reverse().join( '' );
        if ( i === j ) {
            ans.push( i );
        }
    }
    return ans;
}
console.log( palindrome( wordsArray ) );