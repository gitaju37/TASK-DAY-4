let wordsArray = [ "level", "Guvi", "Ajith", "radar", "Pradheep", "madam", "civic", ];

function isPalindrome( str ) {
    const cleanStr = str.toLowerCase().replace( /[^a-z0-9]/g, '' );
    return cleanStr === cleanStr.split( '' ).reverse().join( '' );
}

function findPalindromes( arr ) {
    return arr.filter( item => isPalindrome( item ) );
}

let palindromeArray = findPalindromes( wordsArray );
console.log(palindromeArray );
