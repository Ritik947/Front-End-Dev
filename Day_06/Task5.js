var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
n = arr1.length
let mp = new Map();
for(let i=0; i < n; i++){
    mp.set(arr1[i], 0);
}
for(let i=0; i < n; i++){
    mp.set(arr1[i], mp.get(arr1[i])+1);
}
var max_count = 0;
var ans = 0;
for(let[key,val] of mp){
    if (val > max_count){
        max_count = val;
        ans = key;
    }
}
console.log("Element with maximum frequency:",ans);