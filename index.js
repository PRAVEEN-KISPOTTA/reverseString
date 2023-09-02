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


let seen= {};
seen[9] = true
console.log(seen);