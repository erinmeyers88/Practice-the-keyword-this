//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //"This" allows you to reuse functions in different contexts.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Implicit: it will be bound to whatever is left of the dot when the function is invoked.
      //Explifict: .call - takes as the first parameter the object to be used as "this", subsequent parameters are passed to the function 
                  //.apply - like call, but allows you to use arrays as parameters 
                  //.bind - creates a new function that then needs to be invoked

  // 3) What is the difference between call and apply?

      //.call allows you to use an array as the list of subsequent parameters

  // 4) What does .bind do?

      //.bind creates a new function that is assigned to the variable, and then you have to invoke that new variable/function


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "Erin";
  email: "erin@gmail.com";
  getUsername: function () {
    return this.username
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

var result = user.getUsername();
console.log(result);


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year, move) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = move,
  this.moveCar = function () {
    this.move = this.move + 10;
    return this.move;
  };
}

var prius = new Car('Toyota', 'Prius', 2011, 10);
var mustang = new Car('Ford', 'Mustang', 2013, 15);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

console.log(prius.move);
console.log(mustang.move);


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. 
//Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

var priusResult = getYear.call(prius);
var mustangResult = getYear.call(mustang);

console.log(priusResult);
console.log(mustangResult);

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //It will return undefined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //It's bound to the window object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(function () {getUsername.call(user);}, 5000);
