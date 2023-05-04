let dupArray = [3,5,6,3,7,1,7,9];
let unqArray = dupArray.reduce((arr,curr) => {
    if(!arr.includes(curr)){
        arr.push(curr);
    }
    return ele;
},[]);
console.log(unqArray);