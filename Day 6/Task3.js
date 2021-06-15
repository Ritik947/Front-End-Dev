function first(arr, n=1){
    if(n==1){
        return arr[0];
    }
    if(n <= 0 || !arr){
        return [];
    }
    if(n >= arr.length){
        return arr;
    }
    return arr.slice(0,n);
}

console.log("Output for test data:");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));