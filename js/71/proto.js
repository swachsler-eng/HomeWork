
function Vehicle(color) {
    this.color = color;
    this.speed = 0;
}
Vehicle.prototype.Go = function(e) {
    console.log(`Now going at ${e} MPH`);
    this.speed = e;
};
Vehicle.prototype.Print = function() {
    console.log(`Vehicle-Color: ${this.color}, Speed: ${this.speed} MPH`);
};
const redCar = new Vehicle('red');
redCar.Go(20);
redCar.Go(40);
redCar.Print();
console.log(redCar);

function PlaneC(color) {
    this.color = color;
    this.speed = 0;
}

PlaneC.prototype = Object.create(Vehicle);
const redPPlane = new PlaneC('red');
console.log(redPPlane);
PlaneC.prototype.constructor = PlaneC;
console.log(redPPlane);


class Plane extends Vehicle{
    constructor(color) {
        super(color);
    }
    Go(e) {
        console.log(`Now flying at ${e} MPH`);
        this.speed = e;
    }
}
const bluePlane = new Plane('blue');
bluePlane.Go(200);
bluePlane.Go(400);
bluePlane.Print();
console.log(bluePlane);