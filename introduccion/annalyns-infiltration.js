// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

// /**
//  * The fast attack is available when the knight is sleeping
//  *
//  * @param {boolean} knightIsAwake
//  *
//  * @return {boolean} Whether or not you can execute a fast attack.
//  */
// function canExecuteFastAttack(knightIsAwake) {
//     if (!knightIsAwake) {
//       return true;
//     } else {
//       // throw new Error('Remove this line and implement the function');
//     }
//   }
//   canExecuteFastAttack();
//   console.log(canExecuteFastAttack(false)); // => true
  
//   /**
//    * A useful spy captures information, which they can't do if everyone's asleep.
//    *
//    * @param {boolean} knightIsAwake
//    * @param {boolean} archerIsAwake
//    * @param {boolean} prisonerIsAwake
//    *
//    * @returns {boolean} Whether or not you can spy on someone.
//    */
//   function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {  
//     if (!knightIsAwake || archerIsAwake || prisonerIsAwake) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//  console.log(canSpy(false, true, false)) // => false
//   canSpy();
  
  
//   /**
//    * You'll get caught by the archer if you signal while they're awake.
//    *
//    * @param {boolean} archerIsAwake
//    * @param {boolean} prisonerIsAwake
//    *
//    * @returns {boolean} Whether or not you can send a signal to the prisoner.
//    */
// function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//     if (!archerIsAwake && prisonerIsAwake) {
//       return true;
//     } else {
//       return false;
//       // throw new Error('Remove this line and implement the function');
//     }}
//   console.log(canSignalPrisoner(false, true));
  
//   canSignalPrisoner();
  
//   /**
//    * The final stage in the plan: freeing Annalyn's best friend.
//    *
//    * @param {boolean} knightIsAwake
//    * @param {boolean} archerIsAwake
//    * @param {boolean} prisonerIsAwake
//    * @param {boolean} petDogIsPresent
//    *
//    * @returns {boolean} Whether or not you can free Annalyn's friend.
//    */
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    if (petDogIsPresent === true && knightIsAwake === true) {
        return true;
      } else if (archerIsAwake === true || prisonerIsAwake === true) {
        return false;
      } else {
        return true;
      }

  
    }
console.log(canFreePrisoner(false, true, false, false));