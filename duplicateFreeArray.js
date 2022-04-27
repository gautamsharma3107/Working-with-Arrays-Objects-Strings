function duplicateFreeArray(arr){
    
    let unique_elements = [];
    
    for(let i of arr) {
        if(unique_elements.indexOf(i) === -1) {
            unique_elements.push(i);
        }
    }
    
    console.log(unique_elements);
}
const arr = [1, 2, 3, 1, 2];

duplicateFreeArray(arr);
