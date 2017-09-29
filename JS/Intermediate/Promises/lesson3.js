// Promise methods and format

/* Promise Methods:
  Promise.all()
  Promise.prototype.catch()
  Promise.prototype.then()
  Promise.race()
  Promise.reject()
  Promise.resolve()
*/

/* Promise Syntax
  const myOwnPromise = new Promise( (resolve, reject) => {
    -async code here that will either resolve or reject a value
      resolve( value ); // criteria met
      reject( "reason for error/failure" ); // criteria not met
  });
*/

// Example 1: Our Very Own Promise
const ourFirstPromise = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( "Criteria should always be met here!" );
  }, 300 );
}); // here's the promise we've made

ourFirstPromise.then( ( successMessage ) => {
  console.log( "Success: " + successMessage );
}); //run through this code and pay attention to what is returned and logged