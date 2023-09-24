function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, car) => (acc += car.mileage), 0);
  const averageMileage = totalMileage / cars.length;
  let maxMilCar = [cars[0].mileage];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].mileage > maxMilCar[0]) {
      maxMilCar = [cars[i].mileage, cars[i]];
    }
  }
  let minMilCar = [cars[0].mileage];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].mileage < minMilCar[0]) {
      minMilCar = [cars[i].mileage, cars[i]];
    }
  }
  return {
    averageMileage,
    totalMileage,
    highestMileageCar: maxMilCar[1],
    lowestMileageCar: minMilCar[1],
  };
}

module.exports = analyzeCarMileage;
