//==========================================================
// Find the culprit
// fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert("I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

//==========================================================

// Find the culprit and invoke the alert
// fix.html

<!DOCTYPE html>
<html>
    <body>
        <script src="script.js"></script>
    </body>
</html>
<!--  script.js -->
alert("I'm invoked!");

//==========================================================

// Explain the below how it works
// explain.html

alert("I'm JavaScript!");   //This is the perfect example for show the output
alert('Hello')             // Output will come, but not a good practice
alert(`Wor 
 ld`)                       // The word "World" braken into two lines. 
alert(3 +
1
+ 2);  /* This is multiple line code and its working. Yes, output of alert shows 6. 
       alert(); in between the alert bracket it done everyline action perfectly 
       and show the output.*/


//==========================================================


let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"


//==========================================================

// Fix the below to alert hello Guvi geek
// fix.html


let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname + " " + lname;
alert( `hello ${name}` );


//==========================================================


let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);


//==========================================================


// Fix the below to alert sum of two numbers
// fix.html


let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);


//==========================================================

// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// fix.html


var a = "2" > "12";    //Here the condition is "True", so if loop is executed, if the condition is false a = "2" < "12" else condition will be executed.
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//==========================================================

// How to get the success in console.

let a = +(prompt("Enter a number?")); // If we change input type into number, we will get the true for var a.
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//==========================================================

// How to get the correct score in console.


let value = +prompt('How many runs you scored in this ball');  //We can get the correct score using to get the Number as a input.
if (value === 4) {  
      console.log("You hit a Four");                           //Otherwise we can compare the values using "==". 
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//==========================================================

// Fix the code to welcome the Employee


let login = 'Employee';
let message = (login == 'Employee') ? 'welcome the Employee':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);


//==========================================================

// Fix the code to welcome the boss
// You cant change the value of the msg

let message;
if (null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);


//==========================================================

// Fix the code to welcome the boss


let message;
let lock = "";
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);


//==========================================================

// Fix the code to welcome the boss


let message;
let lock = "";
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

//==========================================================

// Change the code to print

// 3

// 2

// 1


let i = 3;
while (i) {
  console.log(i);
  --i;
}


//==========================================================

// Change the code to print 1 to 10 in 4 lines

let num =10;
let k="";
for(let i = 1;i <= num; i++)
{
    k = k+i+" ";
}
console.log(k);
console.log(k);
console.log(k);
console.log(k);

//==========================================================

//You are allowed to modify only one character 

for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}


//==========================================================

// Change the code to print all the gifts


let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
} 

//==========================================================

// Fix the code to disarm the bomb.


let countdown = 100;
while (countdown > 1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//==========================================================

// Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {                   // if lemein = true this loop will execute and printed as "hi".
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

// Whats the msg printed and why? Guess you answer before running it.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";                // if lemein = true this loop will execute and printed as "hi".
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);







