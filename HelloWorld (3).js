function swapWithPlusMinus(num1,num2){
  console.log(num1,num2)

  num1 = num1+num2;
  num2 = num1-num2;
  num1 = num1-num2;

  console.log(num1,num2)
}

swapWithPlusMinus(2.34,3.45)