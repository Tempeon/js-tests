#JavaScript Questions
1) What value is returned from the following statement?
```javascript 
    function f() { return this }
    f.bind(6).bind(9)()
   ``` 
2) What will the code below output to the console?
```javascript 
    (function() {
      var a = b = 3;
    })();

    console.log(typeof a, typeof b);
   ``` 
3) What will the code below output to the console?
```javascript 
    var myObject = {
      foo: 'bar',
      func: function() {
        var self = this;
        (function() {
          console.log(this.foo, self.foo);
        }());
      }
    };

    myObject.func();
   ``` 
4) What will the code below output to the console?
```javascript 
    function foo1() {
      return {
        bar: 'hello'
      };
    }

    function foo2() {
      return
      {
        bar: 'hello'
      };
    }
    
    console.log(foo1(), foo2());
   ``` 
5) What will the code below output to the console?
```javascript 
    console.log(typeof NaN === 'number');
    console.log(NaN === NaN);
    console.log('abc' / 3);
    console.log('A' - 'B' + '2');
   ``` 
6) In what order will the numbers 1-4 be logged to the console when the code below is executed?
```javascript 
    (function() {
      console.log(1);
      setTimeout(function() {console.log(2)}, 1000);
      setTimeout(function() {console.log(3)}, 0);
      console.log(4);
    }());
   ``` 
7) What will the code below output to the console?
```javascript 
    var arr1 = 'john'.split('');
    var arr2 = arr1.reverse();
    var arr3 = 'jones'.split('');
    arr2.push(arr3);

    console.log(arr1.slice(-1), arr2.slice(-1));
   ``` 
8) What will the code below output to the console?
```javascript 
    console.log(1 + '2' + '2');
    console.log(1 + +'2' + '2');
    console.log(1 + -'1' + '2');
    console.log(+'1' + '1' + '2');
   ``` 
9) What will be the output of the following code?
```javascript 
    for(var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000);
    }
   ``` 
10) What will the following code output to the console?
```javascript 
    var spy = {
      _name: 'James Bond',
      getSecretName: function() {
        return this._name;
      }
    };
    var stoleSecretName = spy.getSecretName;
    console.log(stoleSecretName(), spy.getSecretName());
   ``` 
11) What will the following code output to the console?
```javascript 
    var a = {},
        b = {key: 'b'},
        c = {key: 'c'};

    a[b] = 7;
    a[c] = 13;

    console.log(a[b]);
   ``` 
12) What would the following lines of code output to the console?
```javascript 
    console.log(0 || 1);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1 && 2);
   ``` 
13) What will be the output of the following code?
```javascript 
    var b = {a: 13};
    
    (function foo(b) {
      b = {a: 7};
    })(b);

    console.log(b);
   ``` 
14) What will be the output of the following code?
```javascript 
    var a = 7;
    var b = {a: 7};

    (function foo(a, b) {
      a = 13;
      b.a = 13;
    })(a, b);

    console.log(a, b);
   ``` 
15) What will the following code output to the console?
```javascript 
    function test() {
      console.log(a, foo());

      var a = 7;
      function foo() {
        return 13;
      }
    }

    test();
   ``` 
16) What will the following code output to the console?
```javascript 
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof undefined);
   ``` 
17) What will the following code output to the console?
```javascript 
    function Person(name) {
      this.name = name;
    }

    Person.prototype.printName = () => {
      console.log(this.name);
    }

    let person = new Person('Mike');
    person.printName();
   ``` 
18) What will the following code output to the console?
```javascript 
  var person = {
    age: 27,
  
    printAge: function() {
      console.log(this.age);
    }
  }

  setTimeout(person.printAge, 1000);
   ``` 
19) What will the following code output to the console?
```javascript 
    var arr = [77, 13, 33, 15, 7, 3];
    arr.sort();

    console.log(arr);
   ``` 
20) Consider the following code. What will be printed on the console if a user clicks the first and the fourth button in the list?
```javascript 
    var nodes = document.getElementsByTagName('button');
    
    for(var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
      });
    }
   ``` 
21) How many data types are there in JS-ES5?
22) What will the following code output to the console?
```javascript 
    const person = {
      age: 27
    }

    function editAge(age) {
      person = {
        age: age
      };
    }

    editAge(30);
    console.log(person.age);
   ``` 
23) What will the following code output to the console?
```javascript 
    console.log(typeof foo);
    console.log(typeof bar);
    
    var foo = 7;
    let bar = 13;
   ``` 
24) Consider the following code. What will be printed on the console?
```javascript 
    const funcs = [];

    for (var i = 0; i < 2; i++) {
      funcs.push(() => console.log(i));
    }

    const start = i;

    for (let i = start; i < 6; i++) {
      funcs.push(() => console.log(i));
    }

    funcs.forEach((func) => func());
   ``` 
25) What will the following code output to the console?
```javascript 
    var date = "Hello!";
    console.log(typeof window.Date);
    
    var Date = function() {
      return date;
    };
    
    console.log(typeof Date());
   ``` 
26) Consider the following code. What will be printed on the console?
```javascript 
    function mixArgs(first, second = "b") {
      console.log(first === arguments[0]);
      first = "c";
      console.log(first === arguments[0]);
    }

    mixArgs("a");

    function args(first) {
      console.log(first === arguments[0]);
      first = "c";
      console.log(first === arguments[0]);
    }

    args("a");
   ``` 
27) What will the following code output to the console?
```javascript 
    function add(first, second = first) {
      return first + second;
    }

    console.log(add(1));

    function multiply(first = second, second) {
      return first * second;
    }

    console.log(multiply(undefined, 1));
   ``` 
28) What will the following code output to the console?
```javascript 
    let foo = (a, ...rest) => {
      console.log(a, rest.length);
    }

    foo(7, 13, 33, 77);

    let bar = (a, ...rest, b) => {
      console.log(a, rest.length, b);
    }

    bar(7, 13, 33, 77);
   ``` 
29) What will the following code output to the console?
```javascript 
    const person = {
      name: 'Mike',
      age: 27,
  
      printName: function() {
        console.log(this.name);
      },
  
      printAge: () => {
        console.log(this.age);
      }
    };

    person.printName();
    person.printAge();
   ``` 
30) 
    Which statement(s) is/are true?

    1. Pure functions have side effects.
    2. Pure functions are usual functions.
    3. Pure functions will always produce the same output given the same inputs.
    4. Pure functions have no side effects.
    5. Pure functions will never produce the same output given the same inputs.
  
31) Consider the following code. Which function(s) is/are higher-order?
```javascript 
    function add(x, y) {
      return x + y;
    }

    function bind(func, context) {
      return function() {
        func.apply(context, arguments);
      }
    }

    setTimeout(function() {console.log('Hello there!');}, 1000);
   ``` 
32) 
    Which statement(s) is/are true?

    1. Higher-order functions are usual functions.
    2. Higher-order functions either take functions as parameters, return functions or both.
    3. Higher-order functions either take objects as parameters, return objects or both.
    4. Higher-order function is just an another term of usual function.
  
33) 
    Which statement is true?

    1. A curried function is a function that takes any number of parameters.
    2. A curried function is a function that only takes a single parameter at a time.
    3. A curried function is a function that does not take any parameters.
    4. A curried function is a function that only takes two parameters at a time.
  
34) Consider the following code. Which function(s) is/are pure?
```javascript 
    var x = 7;

    function add(y) {
      return x + y;
    }

    var z = 3;

    function multiply(x, y) {
      return x * y;
    }

    function divide() {
      x = x / 2;
    }
   ``` 
35) Consider the following code. Which function(s) is/are pure?
```javascript 
    var x = 7;

    function add(y) {
      return x + y;
    }

    var z = 3;

    function multiply(x, y) {
      return x * y;
    }

    function divide() {
      x = x / 2;
    }
   ``` 
36) Consider the following code. Which function(s) is/are optimized?
```javascript 
    function factorial_1(n, p = 1) {
      if (n <= 1) {
        return 1 * p;
      } else {
        return factorial_1(n - 1, n * p);
      }
    }

    function factorial_2(n) {
      if(n <= 1) {
        return 1;
      } else {
        return n * factorial_2(n - 1);
      }
    }
   ``` 
37) Consider the following code. Which function(s) is/are curried?
```javascript 
    const multiply = (x) => x * 2;
    const add = (x) => (y) => x + y;
    const divide = (x) => (y) => y * y;
   ``` 
38) What will be the output of the following code?
```javascript 
    (function(x, f = () => x) {
      var x;
      var y = x;
      x = 2;
      return [x, y, f()];
    })(1)
   ``` 
