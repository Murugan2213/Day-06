// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

// Fix the code to get the largest of three.

Input Code:

    aa = (f,s,t) => {
    let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
    }
    aa(1,2,3);

Debugged code:

aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

Output:
 1 2 3
 3

//==========================================================

// Fix the code to Sum of the digits present in the number

Input Code:

    let n = 123;
    console.log(add(n));
    function add(n)
    {
    let sum = 10;
    for(var i=0;i<n.length;i++){
    sum+=n[i]
    }
    return sum;
    }

Debugged code:

    let n = [1,2,3];
    console.log(add(n));
    function add(n)
    {
    let sum = 10;
    for(var i=0;i<n.length;i++){
    sum+=n[i]
    }
    return sum;
    }

Output: 16

//==========================================================

// Fix the code to Sum of all numbers using IIFE function

Input Code:

    const arr = [9,8,5,6,4,3,2,1];
    (function() {
    let sum = 0;
    for (var i = 0; i <= arr.length; i++);{
    sum += arr[i];
    }
    console.log(sum);
    return sum;
    })();

Debugged code:

    (function() {
    const arr = [9,8,5,6,4,3,2,1];
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    console.log(sum);
    return sum;
    })();

Output: 38

//==========================================================

// Fix the code to gen Title caps.

Input Code:

    var arr = [“guvi”, “geek”, “zen”, “fullstack”];
    var ano = function(arro) {
    for (var i = 0; i <= arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
    }
    ano();

Debugged code:

    var arro = ["guvi", "geek", "zen", "fullstack"];
    var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
    }
    ano(arro);

Output:
     Guvi
     Geek
     Zen
     Fullstack

//==========================================================

Fix the code to return the Prime numbers

Input Code:

    const newArray=[1,3,2,5,10];
    const myPrime=newArray.filter(num=>{
    for(let i=2;i<=num;i++){
    if(num%i===0)
    {
    return true;
    } 
    }
    return num===1;
    });
    console.log(myPrime);

Debugged code:

     const newArray = [1, 3, 2, 5, 10];
     const myPrimeArray = newArray.filter(num => {
          for (let i = 2; i < num; i++) {
               if (num % i === 0) return false;
          }
          return num !== 1;
     });
     console.log(myPrimeArray);

//==========================================================

// Fix the code to sum the number in that array

Input Code:

    const num = [10, 20, 30, 40,50,60,70,80,90,100] 
    const sum = (a, b) =>
    a + b
    const sum = num.reduce(sum)
    console.log(sum)

Debugged code:

    const num = [10, 20, 30, 40,50,60,70,80,90,100] 
    const sumOf = (a, b) =>
    a + b
    const sum = num.reduce(sumOf)
    console.log(sum);

Output: 550

//==========================================================

// Fix the code to rotate an array by k times and return rotated array using IIFE function

Input Code:

    var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
    var k = 3;
    k = arr.length % k;
    (function() {
    arr = {};
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
    }
    console.log(out);})();

Debugged code:

    (function() {
    var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
    var k = 3;
    k = arr.length % k;
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
    }
    console.log(out);
    })();
    
Output (11) [6, 8, 6, 1, 9, 10, 12, 13, 1, 2, 3]

//==========================================================

// Fix the code to gen Title caps.

Input Code:

    var arr = [“guvi”, “geek”, “zen”, “fullstack”];
    (function() {
    for (var i = 0; i <= arr.length; i++) {
    console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
    }
    })();

Debugged code:

    var arr = ["guvi", "geek", "zen", "fullstack"];
    (function() {
    for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
    })();

Output:
     Guvi
     Geek
     Zen
     Fullstack

//==========================================================

// print all odd numbers in an array using IIFE function

Input Code:

    var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
    (function() {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    }}
    })();

Debugged code:

    var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
    (function() {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
    console.log(arr[i]);
    }}
    })();

Output:
     1
     3
     5
     7
     79
     7
     9

//==========================================================

// Fix the code to reverse.

Input Code:

    (function(str){
    str1 = str.split(“ “).reverse().join(“”);
    console.log(str1); 
    })(“abcd”)

Debugged code:

    str = "abcd";
    (function(){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
    })();

Output: dcba

//==========================================================

// Fix the code to remove duplicates.

Input Code:

    var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
    }
    res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

Debugged code:

    var res = function(arr){
        newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
    }
    res(["guvi","geek","guvi","duplicate","geeK"])

Output: (4) ['guvi', 'geek', 'duplicate', 'geeK']

//==========================================================

// Fix the code to give the below output:
// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

Input Code:

    var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
    var final=[]
    while(array.length!=0)
    {
    var outer_remove = array.shift();
    
    while(outer_remove.length!=0)
    {
    var inner_remove = outer_remove.shift()
    var key = inner_remove[0]
    var value =inner_remove[1]
    new_object[key]=value
    }
    final.push(new_object)
    }

Debugged code:

    var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
    var final=[]
    while(array.length!=0)
    {
    var outer_remove = array.shift();
    
    while(outer_remove.length!=0)
    {
    var inner_remove = outer_remove.shift()
    var key = inner_remove[0]
    var value =inner_remove[1]
    new_object[key]=value
    }
    final.push(new_object)
    }


//==========================================================

// Fix the code to give the below output:

// Sum of odd numbers in an array

    var as=[12,34,5,6,2,56,6,2,1];
    var s=as.reduce(function(a,c){
    if(c%2!=0)
    {
    return a+c;
    }
    return a;});
    console.log(s);

//==========================================================

// Fix the code to give the below output:
// Swap the odd and even digits

    aa = data=>{
    var a=data;
    for(i=0;i<a.length-1;i++){
    var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
    }
    if((a.length%2)!=0){
    l+=a[a.length-1]
    }
    console.log(l);
    }
    aa(“1234”);