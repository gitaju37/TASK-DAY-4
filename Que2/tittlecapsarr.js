let inputString = ( "if you want to shine like a sun, first burn like a sun" );
const tittlecase = str => {
    let words = str.split( ' ' );
    for ( let i = 0; i < words.length; i++ ) {
        words[ i ] = words[ i ].charAt( 0 ).toUpperCase() + words[ i ].slice( 1 ).toLowerCase();
    }

    return words.join( ' ' );
}
console.log( tittlecase( inputString ) );