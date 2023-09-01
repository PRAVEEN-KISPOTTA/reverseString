function reverseString(str){
    let a = "";
    for(let i = str.length-1; i >=0; i--){
        a +=str.charAt(i);
    }
    return a;
}

console.log(reverseString("hello"));