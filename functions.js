function arrayExample() {
  // create an array of numbers
  var numbers = [1, 2, 3, 4, 5];

  // access an element in the array
  console.log("Getting an element in the array one by one");
  console.log(numbers[0]);
  console.log(numbers[1]);
  console.log(numbers[2]);
  console.log(numbers[3]);
  console.log(numbers[4]);
  console.log();

  // change an element in the array
  console.log("Changing an element in the array");
  numbers[0] = 6;
  console.log(numbers); // output: [6, 2, 3, 4, 5]

  // add an element to the end of the array
  console.log("Adding an element to the end of the array");
  numbers.push(6);
  console.log(numbers); // output: [6, 2, 3, 4, 5, 6]

  // remove an element from the end of the array
  console.log("Removing an element from the end of the array");
  numbers.pop();
  console.log(numbers); // output: [6, 2, 3, 4, 5]

  // add an element to the beginning of the array
  console.log("Adding an element to the beginning of the array");
  numbers.unshift(0);
  console.log(numbers); // output: [0, 6, 2, 3, 4, 5]

  // remove an element from the beginning of the array
  numbers.shift();
  console.log(numbers); // output: [6, 2, 3, 4, 5]

  // get the length of the array
  console.log("Getting the length of the array");
  console.log(numbers.length); // output: 5
  console.log();

  // loop through the array
  console.log("Looping through the array");
  for (var i = 0; i < numbers.length; i++) {
    console.log("Index: " + i + " Value: " + numbers[i]);
  }
  console.log();

  // loop through the array using forEach
  numbers.forEach(function (number) {
    console.log(number);
  });
  console.log();

  // loop through the array using forEach and arrow function
  numbers.forEach((number) => console.log(number));
  console.log();

  // loop through the array using for...of
  for (let number of numbers) {
    console.log(number);
    //hi
  }
  console.log();

  var j = 0;
  while (j < numbers.length) {
    console.log("Index of J: " + j + " Value: " + numbers[j]);
    j++;
  }
  console.log(j);

  j = 0;
  do {
    console.log("Index of J: " + j + "Value: " + numbers[j]);
    j++;
  } while (j < numbers.length);
}

function ifElseStatements() {
  var x = 10;
  var y = 5;

  // if statement
  if (x > y) {
    console.log("x is greater than y");
  }

  // if else statement
  if (x < y) {
    console.log("x is less than y");
  } else {
    console.log("x is greater than or equal to y");
  }

  // else if statement
  if (x < y) {
    console.log("x is less than y");
  } else if (x > y) {
    console.log("x is greater than y");
  } else {
    console.log("x is equal to y");
  }

  // ternary operator
  var result = x > y ? "x is greater than y" : "x is less than or equal to y";
  console.log(result);
}

function switchStatements() {
  var x = 10;
  var y = 5;

  switch (x) {
    case 1:
      console.log("x is 1");
      break;
    case 2:
      console.log("x is 2");
      break;
    case 3:
      console.log("x is 3");
      break;
    default:
      console.log("x is not 1, 2, or 3");
  }
}

//helloWorld();
arrayExample();
//ifElseStatements();
