let array = [ 1, 3, 5, 7, 9, 11, 34 ];
const rotate=function(array){
    let rotatearr = [];
    rotatearr.push(array[array.length-1]);
    for(let i=0;i<array.length-1;i++){
        rotatearr.push(array[i]);
    }
    return rotatearr;
}
console.log(rotate(array));