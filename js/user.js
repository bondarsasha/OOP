//Car, Drivers, Speed and...

var car = function(model, driverOne, driverTwo) {
  this.model = model;
  this.driverOne = driverOne;
  this.driverTwo = driverTwo;
  this.speed = 100;
  this.currentDriver = this.driverOne;
  this.run = function() {
    console.log('I Went');
  }
  this.stop = function() {
    console.log('I Stopped');
  }
  this.changeDriver = function() {
    if (this.currentDriver == this.driverOne) {
      this.currentDriver = this.driverTwo;
      this.speed += 60;
      console.log('currentDriver: ' + this.currentDriver + '\nspeed: ' + this.speed);
    } else {
      this.currentDriver = this.driverOne;
      this.speed -= 40;
      console.log('currentDriver: ' + this.currentDriver + '\nspeed: ' + this.speed);
    }
  }
};

var lexus = {};
lexus.__proto__ = new car('lexus', 'sasha', 'dima');
lexus.changeTired = function() {
  console.log(this.model + ' change on winterTired');
}
lexus.changeTired();
lexus.changeDriver();
lexus.run();
lexus.stop();

var toyota = {};
toyota.__proto__ = new car('toyota', 'oleg', 'serezha');
toyota.doTuning = function() {
  console.log(this.model + ' tuning is ready');
}
toyota.doTuning();
toyota.run();
toyota.stop();
toyota.changeDriver();
toyota.run();

//Aircraft and his prototypes

function Aircraft(name) {
  this.name = name;
  this.speed = 400;
}

Aircraft.prototype.fly = function() {
  console.log('I flying');
}

function Fighter(name) {
  Aircraft.apply(this, arguments);
}

Fighter.prototype = Object.create(Aircraft.prototype);

Fighter.prototype.constructor = Fighter;

Fighter.prototype.fly = function() {
  Aircraft.prototype.fly.apply(this);
  console.log( this.name + ' полетел' );
};

var Fighter = new Fighter('истребитель');
Fighter.fly();
