// function sum(args){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum; 
// }

// function sum(...args){
//     let sum = 0;
//     for (let i = 0; i < args.length; i++){
//         sum += args[i];
//     }
//     return sum; 
// }

// console.log(sum(1,2,3,4))

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}
  
class Dog {
    constructor(name) {
    this.name = name;
    }
}

// Function.prototype.myBind = function (notBindArgsButReallyAre){
//     const funk = this; 
//     const ctx = arguments[0];
//     const bindArgs = Array.prototype.slice.call(arguments, 1);
     

//     return function (callArgs){
//         const sliced = Array.prototype.slice.call(arguments);
        
//         return funk.apply(ctx, bindArgs.concat(sliced));
//     } 
// }

Function.prototype.myBind = function (ctx, ...bindArgs){
  const funk = this;
  return function (...callArgs){
    return funk.apply(ctx, [...bindArgs, ...callArgs])
  }
}
  
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");



// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true
  
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true






/* Curried Sum*/





function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!

Function.prototype.curry = function(numArgs){
  let that = this;
  let args = [];
  
  return function _anon(num){
    args.push(num);
    if (args.length < numArgs){
      return _anon;
    } else {
      return that(...args);
    }
  };

}



let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30