function is_array(arr){
    if(Array.isArray(arr)){
        return true;
    }
    else{
        return false;
    }
}

console.log("Output for test data:");
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
