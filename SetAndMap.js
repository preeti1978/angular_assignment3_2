var myMap = new Map();//creating a new map
if (!myMap.has("1")) //check if the key already exists or not 
     myMap.set("1","one");//key is string here
if (!myMap.has("2")) //check if key already exists or not
	 myMap.set("2","two");//if not then add key-value pair


var mySet = new Set();//create new Set thru Set method
if (!mySet.has(1)) //check if not exists
   mySet.add(1);//add value 1  to mySet
if (!mySet.has(2)) //check if not exists
	mySet.add(2); //then add the value 2 to mySet

//Iterating thru Set using for loop
console.log("Iterating through set");
mySet.forEach(function(value){
			console.log(value);
		}
	)




//Iterating thru Map using for loop
console.log("Iterating through Map");
myMap.forEach(function(value,key){
			console.log("value:"+value+" key:"+key);
		}
	)

//Create an array of strings
var stringArray = ["mary","had","a","little","lamb"];
var mySet = new Set(stringArray);//creating a set and initializing itvto the array as asked in the question


//a boolean variable to see whether set has all values of array
var setHasAllValuesInArray=true; 

//iterating through array
for (var i=0;i<stringArray.length;i++){
	if (!mySet.has(stringArray[i])){ //using has function to check if set has an element
			setHasAllValuesInArray=false;
			break;
	}
}

if (setHasAllValuesInArray) console.log("Set has all the values in array");
  else
  	console.log("Set doesnt have all the values that are there in array");

//calling function to print all values  of array
printAllArrayVals(stringArray);

function printAllArrayVals(...arr){ //using spread
	console.log("Printing all values in array in one go");
	var e = [...arr]; //using spread function 
	console.log(e[0]);//to print all array values in one go
}