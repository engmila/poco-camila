/**
 * returns the nth fibbonaci number
 * remember, fibbonaci numbers are the sum of the previous
 * 2 numbers, starting with 1 and 1.
 */
var fibbonaci = function (n) {
	var a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
};