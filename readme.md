# Challenge: Car Mileage Analysis

## Instructions

You are given an array of car objects, each containing information about a car's make, model, year, and mileage. Your goal is to perform some analysis on the car mileage data using high order array methods.

Implement a function called `analyzeCarMileage` which takes in an array of car objects and performs the following tasks:

1. Calculate the average mileage of all cars.
2. Find the car with the highest mileage.
3. Find the car with the lowest mileage.
4. Calculate the total mileage of all cars combined.

The function should return an object containing the calculated values as properties.


### Examples

```js
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
  { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const analysis = analyzeCarMileage(cars);
console.log(analysis);
 Output:
 {
   averageMileage: 23333.33,
   highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
   lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
   totalMileage: 70000
 }
```



