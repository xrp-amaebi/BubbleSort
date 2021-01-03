
const sample_array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

//Bubble Sort Implementation
const sort = (arr) => {
    // const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    for(let m = 0 ; m < arr.length; m++){
        for (let n = 1; n < arr.length; n++){
            if(arr[n] < arr[n-1])
            {
                var ref = arr[n]; 
                arr[n] = arr[n - 1]; 
                arr[n - 1] = ref; 
            }
        }
    }
    return  arr ;
};

console.log(sort(sample_array));