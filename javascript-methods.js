/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype."
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object.
- If a method is constructed, then it will be available for the object.
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let arr = [];

  for(let i = 0; i < this.length; i++){
    if(this[i]!==undefined){
      arr.push(callbackFn(this[i], i, this));
    }
  }

  return arr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  let arr = [];
  for (let i = 0; i < this.length; i++){
    if (this[i] !== undefined && callbackFn(this[i], i, this)){
      arr.push(this[i]);
    }
  }

  return arr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    if (this[i] !== undefined && callbackFn(this[i], i, this)){
      return true;
    }
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    if (this[i] !== undefined && !(callbackFn(this[i], i, this))){
      return false;
    }
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let val = this[0];

  for (let i = 1; i < this.length; i++){
    if (this[i] !== undefined){
      val = callbackFn(val, this[i], i);
    }
  }

  return val;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    if (this[i] !== undefined && this[i] === searchElement || (Number.isNaN(searchElement) && Number.isNaN(this[i]))){
      return true;
    }
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    if (this[i] !== undefined && this[i] === searchElement){
      return i;
    }
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  for (let i = this.length - 1; i >= 0; i--){
    if (this[i] !== undefined && this[i] === searchElement){
      return i;
    }
  }

  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
