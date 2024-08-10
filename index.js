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



const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
    };
    function findClassTopper(studentMarks) {
        let highestAverage = 0;
        let topper = "";
      
        for (const studentName in studentMarks) {
          const marks = studentMarks[studentName];
          console.log(marks)
          const totalMarks = marks.reduce((total, mark) => total + mark, 0);
          const average = totalMarks / marks.length;
      
          if (average > highestAverage) {
            highestAverage = average;
            topper = studentName;
          }
        }
      
        return topper;
      }

      
      console.log(findClassTopper(studentMarks)); // Output: "Jane"


      //---------------------------------
      //complete the calculatePrice function
//Do not alter the starter code
    const goods = {
        apple: { price: 150, quantity: 2 },
        banana: { price: 75, quantity: 3 },
        orange: { price: 125, quantity: 1 }
        };    
        function calculatePrice(goods){
            //Implement your function here

            let totalPrice = 0;
            for(let item in goods){
                const quantity = goods[item];
                totalPrice += quantity.price*quantity.quantity;
            }
            return totalPrice;
        }
        console.log("Total price:-",calculatePrice(goods));
        //output : 650


        //--------------------------------------

        //Complete the URLconstructor function 
// Do not change the starter code. 


function URLconstructor(queryParameters,domain,path){
    let finalurl = "";
    finalurl += "https://";
    finalurl += domain;
    finalurl += path;
    for( let key in queryParameters){
        finalurl += '?';
        finalurl += key;
        finalurl += '=';
        finalurl += queryParameters[key];
    }
    return finalurl; 
}

    const queryParameters = {name:'John',age:'28'}; 
    const domain = "google.com";
    const path = '/search';
    console.log(URLconstructor(queryParameters,domain,path));
    //output: https://google.com/search?name=John&age=28
      



    let username = "praveen";

function reverseString(name){
    let str = "";
    for(let i = name.length-1; i>=0; i--){
        str += name.charAt(i);
    }
    return str;
}

const res = reverseString(username);
console.log(res);

