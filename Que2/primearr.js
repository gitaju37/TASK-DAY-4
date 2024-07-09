const isPrime = val => {
    for ( let factor = 2; factor < val; factor++ ) {
        if ( val % 2 === 0 ) {
            return false
        }
    }
    return true;
}

const primeTill = ( n ) => {
    let primenumbers = [];
    for ( let value = 2; value <= n; value++ ) {
        if ( isPrime( value ) ) {
            primenumbers.push( value );
        }
    }
    return primenumbers;
}
console.log( primeTill( 200 ) );