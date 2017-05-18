/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = function(){
 var memory = 0;
 var total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   var load = function (value){
      validate(value);
      total = value;
      return total;
   };

  /**
   * Return the value of `total`
   * @return { Number }
   */
   var getTotal = function getTotal(){
      return total;
   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   var add = function add(value){
    validate(value);
    total = total + value;
   };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   var subtract = function subtract(value){
    validate(value);
    total = total - value;
   };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   var multiply = function multiply(value){
    total = total * value;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   var divide = function divide(value){
    total = total / value;
   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   var recallMemory = function recallMemory(){
    return memory;
   };

  /**
   * Stores the value of `total` to `memory`
   */

   var saveMemory = function saveMemory(){
    memory = total;
   };

  /**
   * Clear the value stored at `memory`
   */

   var clearMemory = function clearMemory(){
    memory = 0;
   };

  /**
   * Validation
   */

   var validate = function validate(value){
    if( !(typeof value === 'number') ){
      throw new error();
    }
   };

   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
    validate: validate
   };
 };