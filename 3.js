/**

  =============== Coding Test 3 ===============
  Here we introduce the idea of a truncatable prime. 
  That is a prime number where if its rightmost digit is successively remove, it still remains prime. 
  For example, 233 is a truncatable prime, because 233 is prime → 23 is prime → 2 is prime.
  Now create a function that generates these truncatable primes and returns them in a list representation.
  Hint: There are indeed a finite number of these truncatable primes.
  Comment and organize your code well. In this problem, we leave it entire up to you in regard to what input(s) your function may take.
  However, please clearly document what each input does so that we know and can test your code.

*/

/** 
  * Returns all truncated primes less or equal than checkLimit
  * checkLimit - integer
  * returns array
  */ 
function findAllTruncatedPrimes(checkLimit){

  function isPrime(num) {
    var maxDivisor = Math.sqrt(num);
    for(var i = 2; i <= maxDivisor; i++)
      if(num % i === 0) 
        return false;
    return num !== 1;
  }

  function isTruncatable(num) {
    if (!isPrime(num))
      return false;

    if (num < 10)
      return true;

    return isTruncatable(Math.floor(num / 10));
  }

  var resultList = [];
  for (var i=2; i <= checkLimit; i++){
    if (isTruncatable(i)) 
      resultList.push(i);
  }  

  return resultList;
}

findAllTruncatedPrimes(1000000);