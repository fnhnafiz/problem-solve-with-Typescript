// Problem 1:
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.
// Function Signature:

// function formatString(input: string, toUpper?: boolean): string
// Example:

// formatString("Hello");          // Output: "HELLO"
// formatString("Hello", true);   // Output: "HELLO"
// formatString("Hello", false);  // Output: "hello"

function formatString(input:string,toUpper?:boolean):string{
   if(toUpper === false){
    return input.toLowerCase()
   }else{
    return input.toUpperCase()
   }
}

// // If the boolean is true or not provided, return the string in uppercase.
// const result = formatString("Hello");
// console.log(result)          
// const result2 = formatString("Hello", true);   
// console.log(result2) 

// // If the boolean is false, return the string in lowercase.
// const result3 = formatString("Hello", false);
// console.log(result3) 

// ===============PROBLEM====2=================
// Problem 2:
// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

// Function Signature:

// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
// Example:

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 }
// ];

// filterByRating(books); 
// // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
const items = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    // const newItems = items.filter((item)=> item >= 4{})
   return items.filter((item)=>{
      return item.rating >= 4 
    })
}

// const result = filterByRating(items)
// console.log(result)


// ===================PROBLEM 3=================
// Problem 3:
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// Function Signature:

// function concatenateArrays<T>(...arrays: T[][]): T[]
// Example:

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

function concatenateArrays<T>(...arrays: T[][]): T[]{
   return arrays.flat()
}
// console.log(concatenateArrays(["a", "b"], ["c"]));       
// console.log(concatenateArrays([1, 2], [3, 4], [5]))    

// ===================================PROBLEM 4===========================

// Problem 4:
// Description:

// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
// Example:

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"

class Vehicle {
   protected make : string;
   protected year :number;

   constructor(make:string,year:number){
      this.make = make;
      this.year = year;
   }

   getInfo():string{
      return `The ${this.make} car was made in ${this.year} year`
   }
}
// const myCar = new Vehicle("Toyota", 2020);
// console.log(myCar.getInfo())

class Car extends Vehicle {
   private model:string;
   constructor(make:string,year:number, model:string){
      super(make,year);
      this.model = model
   }
   getModel():string{
      return `The ${this.make} car model numbder ${this.model}`
   }
}



// const myCar = new Car("Toyota", 2020,"Corola");
// console.log(myCar.getModel())

// =========================PROBLEM 5====================
// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number
// Function Signature:

// function processValue(value: string | number): number
// Example:

// processValue("hello"); // Output: 5
// processValue(10);      // Output: 20

function processValue(value: string | number): number{
   if(typeof value === "string"){
      return value.length
   }
   else if(typeof value === "number"){
      return value * 2.44
   }else{
      throw new Error("Invalid number")
   }
      // return typeof value ==="number" && value *2 
   
}

console.log(processValue("hello i am nafiz from faridpur")); // Output: 5
console.log(processValue(140));      // Output: 20