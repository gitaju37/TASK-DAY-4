let arr1 = [ 3, 7, 4,];
let arr2 = [ 6, 8, 2, 10];

let combine = [ ...arr1, ...arr2 ];
console.log( combine );
let combineSort = combine.sort( ( a, b ) => a - b );
console.log( combineSort );

const median= function(arr){
    let med=[];
    if(arr.length%2===0){
        med=(arr[arr.length/2]+arr[(arr.length/2)-1])/2;
    }else{
        med=arr[(arr.length-1)/2];
    }
    return med;
}

console.log( median( combineSort ) );


