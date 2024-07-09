let array = [ 1, 3, 5, 6, 1, 3, 7, 8, 6 ];

const duplicate=function(array){
    let duplicatearr = [];
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]===array[j]){
                duplicatearr.push(array[i]);
            }
        }
    }
    return duplicatearr;
}
console.log(duplicate(array));