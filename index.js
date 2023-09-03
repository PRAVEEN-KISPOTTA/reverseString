function reverseString(str){
    /* let a = "";
    for(let i = str.length-1; i >=0; i--){
        a +=str.charAt(i);
    }
    return a; */
    return str.split('').reverse().join("");
}

console.log(reverseString("hello"));

const Students = [
    "Tina",
    "Raj",
    "Bobby",
    "Ajit",
    "Karan",
    "Anjali"
]

// for(let i = 1; i<=Students.length; i++){
//     console.log(`Roll No. ${i}:- ${Students[i-1]}`);
// }

for(let i in Students){
    console.log(`Roll No. ${parseInt(i) + 1}:- ${Students[i]}`);
}


//-----------------Delete occurrence of an element

//Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
   //Implement Your function here
   for(let i = arr.length-1; i>=0; i--){
    if(ele === arr[i]){
        arr.splice(i, 1);
    }
   }
    
   return arr

};

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];


//Complete the findDuplicate function
// Do not alter the starter code.

let arr1 = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
    let newArr = [];
    let seen = {};
    
    for(let i = 0; i<arr.length; i++){
        if(seen[arr[i]]){
            if(!newArr.includes(arr[i])){
                newArr.push(arr[i]);
            }
        }
        else{
            seen[arr[i]] = true;
        }
    }
    return newArr
}    
console.log("findDuplicate:-", findDuplicate(arr1));

//------------------print only first 5 even number

const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];

function evenNumber(arr){
    let newArr = [];
    // let count = 0;

    for(let i of arr){
        if(i%2 === 0 && newArr.length < 5){
            newArr.push(i);
            // count++;
        }
    }
    return newArr;
}

console.log("even number:-", evenNumber(inputs));

//---------------spread operator
const aprilBatch = ["Tina", "Akash"];
const mayBatch = ["Ritik", "Annu", "Anjali"];
const juneBatch = ["Saba", "Ajit"];
const julyBatch = [];

function studentDetails(batch, name){
    batch.push(name);
    console.log(batch);
}

studentDetails(mayBatch, "Neha");
studentDetails(juneBatch, "Neha");


//----------------Non Duplicate array

//complete the function mergeArray
//Do not alter the starter code.

a = [1,2,4,5,7];
b = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    //Implemet your function here
    let newSet = new Set();
    for(let i of arr1){
        newSet.add(i);
    }

    for(let i of arr2){
        newSet.add(i);
    }
    return [...newSet];
}
console.log(mergeArray(a,b));
//Output : [1,2,4,5,7,3,6,9,0]

