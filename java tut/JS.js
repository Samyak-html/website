
//Basic Writing------------------ 
document.write("<b> Elvish BHaii</b><br>");
document.write("Hey! \"hey,How's everything going with you\"");
document.write("\"Nothing  Much\" :(");

//Function_Making-----------------
function WtF(message){
alert(message);
}
document.write("<br>5 + 6= ");
document.write(eval("5+6"));

//Creating_my_own_fucntion_of_sum---------------------
function sum(num1,num2){
    document.write(num1+num2);
}
document.write("<br>");
document.write(sum(5,8)+"<br>");

 //For_Loop_Use_by_arrays_Example----------------------
 x = new Array(47,88,90,77)
 sum = 0;
 for(i=0; i<x.length; i++){
     sum += x[i];

 }
 document.write("sum of array is "+sum);

     //While_Loop_Itration_with_Multiple_Heading_Example------------------------
    function wh(){
     var f = 1;
     while(f<7){
         document.write("<h"+f+">This is a level"+f+" Heading.<h"+f+">");
         f++;
     }
    }

//Switch_statments----------------------------

for(i=1; i<=3; ++i)
{
    switch(i){
        case 1:
            val = "one"
            break;
        case 2:
            val = "two"
            break;
        case 3:
            val = "three"    
            break;
        default:
            val = "unknown"
        }
        document.write(val+"<br>")
}

//Break_Statements----------------------------

br = 0;
do{
    br++;
    document.write(br+"<br>");
    if(br == 3) continue;
}
while(br<7)

//Finding_Factorial_of _Number_with_return_label_in_Function---------------------------------

function fact(n){
    sum = 1;
    for(m=1; m<=n; m++){
        sum *= m;
    }

    document.write("factorial of"+n+"is"+sum)
}
fact(5);

/*With_Statment-------------------- 
This statement helps you in eliminating retyping the name of an object 
that is to be refrenced in a series of refrences and method invocations. 

SYNTAX:
with(variableName){
    statements
}*/
with(document){
    write("<br>hello");
    write("<br>");
    write("zero");
}

//For-In_Itration----------------------
cap = new Array(1,2,3,3,5,6,7,8,9,0);
for(key in cap){
  document.write(cap[key]+"<br>")  
}

var obj = {
    sameer : "Master",
    mayur : "vice MAster",
    neeraj: "vice president",
    abhay: "commander in chief" 

}
for (flow in obj){
    document.write("<br>"+flow+" : "+obj[flow]+"<br>");
}

/* Throw_statments----------------------
SYNTAX:
throw expression
the value of eXpression is used to identify the type of error that occured*/
try{
var op = 1;
while(op<12)
{
    if(op == 7) throw "7 is an error"//throw creates user defined errors
    
document.write(op+"<BR>");
op++;
}}
catch(error){
    document.write("<B>{ERROR}</B>:"+error);

}





/*TRY-to-CATCH_Statments--------------------------
SYNTAX:
try{
    statment(s) where an exception may be thrown
}
catch(errorVariable){
    statment(s) that handle the exception
}*/

function PrimeTest(upi){

    document.write("<BR>Testing "+ upi+":");
    try{
        if(upi < 1 || upi > 20) throw "invalid digit<BR>"
        for(var i=2; i<upi; i++)
        if(upi% i == 0) throw "it is divisible by "+i+"<BR>"
        document.write("its an prime number<BR>")
    }catch(err){
        document.write(err)
    }        
}
for(i=2;i<=21;++i){
    PrimeTest(i)
}
/* JS_Exercise-------------------------- 
in this i will create 3 buttons which will change background color*/

function bgred(){
    document.bgColor="red";
}
function bggreen(){
    document.bgColor="green"
}
function bgpink(){
    document.bgColor="pink"
}

//OBJECTS-----------------------
const Booker = {
    nlity: 'Russ',
    price: 6000,
    color: 'fair',
    USP: 'Amul',}

document.write(Booker)




