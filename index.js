//Question 1
//Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of the array. 
//Do not use any library functions, need to do via for loops only

const arr =[12,34,89,76,43,21,67,41,29,100,42,79];

let evenArr=[];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

         if((arr[i]%2)===0){
        
            evenArr.push(arr[i]);
        }
    
    }
console.log("Even number present in the array are:",evenArr);



/*
Question 2
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

*/


/*
Question 3

Suppose you have an array of 101 integers. 
This array is already sorted and all numbers in this array are consecutive. 
Each number only occurs once in the array except one number which occurs twice. 
Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

*/

let arr=[];

for (let i= 0; i < 11; i++) {
    arr.push(i);
}

arr.push(10); //push 101 to make it repeatable in array

for (let i= 0; i< 11; i++) {
    if(arr[i]===arr[i+1]){

        console.log("The repeated number n the array  is:",arr[i]);
    }
}




/*
Question 4
Assume we have a form e.g


<form>
   <input type=”text” name=”firstname” />
   <input type=”check” name=”checkme” />
   <input type=”submit” value=”submit”/>
</form>


For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, 
it will not allow the form to submit.

*/

function validateForm() {
    var x = document.forms["form"]["firstname"].value;
    if (x == ""){
      alert("Name must be filled out");
      return false;
    }
  }

  function checkForm(form)
  {

    if(!form.checkme.checked) {
      alert("Please chck the checkbox");
      form.terms.focus();
      return false;
    }
    return true;
  }


/*
Question 5
Support you have a html tag like this 
Write a small html code to add a class on this div. 
Add a rounded border box on this div and also there should be a gap of 5px between the text and the rounded box and the text. 


*/

<h1>Solution to Question 6</h1>
    <div><p class="round1">Javascript Developer</p></div>

    p.round1 {
        border: 2px  solid red;
        border-radius: 5px;
        padding :5px
  }

/*Question 6
Write css to center a box on the page. 
Let’s see we have a blank empty page and we want to create a box of size 100px x 100px and
it should be the center of the page always. How will you do it?
*/


.box{
    width:100px;
    height:100px;
    margin: auto;
    position: fixed;
    background-color: blue;

}

/*    Question 7

Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this url via ajax and print its response

*/
$.ajax({
    type: "GET",
    url: "http://url.com/predict",
    success: function(data) {
       console.log(data)
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
});


// second method 
const fetchPromise = fetch(www.example.com/api/get/1);

try {
    fetchPromise.then(response => {
        console.log(response);
      });
} catch (error) {
    console.log(error)
}



/*Question 8

Assume there is a json object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
Write a code to sort the object by id

*/

let obj = [{
    “id” : 4, “name” : “abc”,
    “id” : 10, “name” : “ab2”,
    “id” : 5, “name” : “abc3”,
    “id” : 6, “name” : “abc5”
   }]

function sortByProperty(id){ 

    return function(a,b){  
       if(a.id> b.id)  
          return 1;  
       else if(a.id < b.id)  
          return -1;  
   
       return 0;  
    }  
 }

 sortByProperty(id);
 
