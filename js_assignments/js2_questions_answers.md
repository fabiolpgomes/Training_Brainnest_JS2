## Javascript 2 - Terminology & Defitions - Questions and Answers.

### 1. Why is it important to write clean code?

Writing clean code is important because it allows you to clearly communicate with the next person who works with what you've written.

### 2. What is the difference between good comments and bad comments?

Good comments describe why the code is doing what it does;
Bad comments describe what the code is doing.

### 3. What is array?

An array is a special variable, which can hold more than one value.

### 4. What are arrays useful for?

An array can hold many values under a single name, and you can access the values by referring to an index number.

### 5. How do you access an array element?

You access an array element by referring to the index number:
const names = ["Fabio", "Joaquim", "Rosangela"]
let name = names[0]; // expected output Fabio

### 6. How do you change an array element?

Enter the array name and assign the new value.
names[0] = "Aleksa" // Fabio was changed for Aleksa

### 7. What are some useful array properties?

Create an array, Create an array by encapsulating array elements in squared brackets: name = ["Fabio", "Joaquim", "Rosangela"]

concat() Joins arrays and returns an array with the joined arrays

onstructor Returns the function that created the Array object's prototype

copyWithin() Copies array elements within the array, to and from specified positions

entries() Returns a key/value pair Array Iteration Object

every() Checks if every element in an array pass a test

fill() Fill the elements in an array with a static value

filter() Creates a new array with every element in an array that pass a test

find() Returns the value of the first element in an array that pass a test

findIndex() Returns the index of the first element in an array that pass a test

forEach() Calls a function for each array element

from() Creates an array from an object

includes() Check if an array contains the specified element

indexOf() Search the array for an element and returns its position

isArray() Checks whether an object is an array

join() Joins all elements of an array into a string

keys() Returns a Array Iteration Object, containing the keys of the original array

lastIndexOf() Search the array for an element, starting at the end, and returns its position

length Sets or returns the number of elements in an array

map() Creates a new array with the result of calling a function for each array element

pop() Removes the last element of an array, and returns that element

prototype Allows you to add properties and methods to an Array object

push() Adds new elements to the end of an array, and returns the new length

reduce() Reduce the values of an array to a single value (going left-to-right)

reduceRight() Reduce the values of an array to a single value (going right-to-left)

reverse() Reverses the order of the elements in an array

shift() Removes the first element of an array, and returns that element

slice() Selects a part of an array, and returns the new array

some() Checks if any of the elements in an array pass a test

sort() Sorts the elements of an array

splice() Adds/Removes elements from an array

toString() Converts an array to a string, and returns the result

unshift() Adds new elements to the beginning of an array, and returns the new length

valueOf() Returns the primitive value of an array

### 8. What are some useful array methods?

concat() Joins arrays and returns an array with the joined arrays

constructor Returns the function that created the Array object's prototype

copyWithin() Copies array elements within the array, to and from specified positions

entries() Returns a key/value pair Array Iteration Object

every() Checks if every element in an array pass a test

fill() Fill the elements in an array with a static value

filter() Creates a new array with every element in an array that pass a test

find() Returns the value of the first element in an array that pass a test

findIndex() Returns the index of the first element in an array that pass a test

forEach() Calls a function for each array element

from() Creates an array from an object

includes() Check if an array contains the specified element

indexOf() Search the array for an element and returns its position

isArray() Checks whether an object is an array

join() Joins all elements of an array into a string

keys() Returns a Array Iteration Object, containing the keys of the original array

lastIndexOf() Search the array for an element, starting at the end, and returns its position

length Sets or returns the number of elements in an array

map() Creates a new array with the result of calling a function for each array element

pop() Removes the last element of an array, and returns that element

prototype Allows you to add properties and methods to an Array object

push() Adds new elements to the end of an array, and returns the new length

reduce() Reduce the values of an array to a single value (going left-to-right)

reduceRight() Reduce the values of an array to a single value (going right-to-left)

reverse() Reverses the order of the elements in an array

shift() Removes the first element of an array, and returns that element

slice() Selects a part of an array, and returns the new array

some() Checks if any of the elements in an array pass a test

sort() Sorts the elements of an array

splice() Adds/Removes elements from an array

toString() Converts an array to a string, and returns the result

unshift() Adds new elements to the beginning of an array, and returns the new length

valueOf() Returns the primitive value of an array


### 9. What are loops useful for?

If you want to loop through the array and find a specific one.

### 10. What is the break statement?

The break directive is activated if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop.

### 11. What is the continue statement?

The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows). We can use it if we’re done with the current iteration and would like to move on to the next one.

### 12. What is the DOM?

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

### 13. How do you target the nodes you want to work with?

When working with the DOM, you use “selectors” to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Let’s start with CSS-style selectors. In the example, you could use the following selectors to refer to
`<div class="display"></div>`

### 14. How do you create an element in the DOM?

To create a DOM element, you use the createElement() method.

### 15. How do you add an element to the DOM?

First, create a div section and add some text to it using <p> tags.
Create an element <p> using document. createElement("p").
Create a text, using document. ...
Using appendChild() try to append the created element, along with text, to the existing div tag.


### 16. How do you remove an element from the DOM?

parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child


### 17. How can you alter an element in the DOM?

When you have a reference to an element, you can use that reference to alter the element’s own properties. This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more.


### 18. When adding text to a DOM element, should you use textContent or innerHTML?

Using textContent is recommended when inserting plain text.

### 19. Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
```
The <script> tag can be placed in the <head> section of your HTML or in the <body> section, depending on when you want the JavaScript to load
```
### 20. How do “events” and “listeners” work?

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

An event listener is a function that initiates a predefined process if a specific event occurs. So, an event listener “listens” for an action, then calls a function that performs a related task. This event can take one of many forms. Common examples include mouse events, keyboard events, and window events.

### 21. What are three ways to use events in your code?

Inline Event Handlers - The easiest way to get started with events in JavaScript is to use an inline event handler. This means that you’ll define your event in your HTML file.
```<button onclick="submitForm()">Submit form</button>```

Events with Handler Properties - In an inline handler, you need to specify which function you want to execute in your HTML file.
```<button onclick="submitForm()">Submit form</button>``` 

Event Listener - Event listeners can be used to declare an event in JavaScript. Listeners are always looking for when the state of an element is changed, and if that element is changed, the code in the listener will be executed.
```const submitForm = () => {
	const text = document.getElementById("submitted");
	text.textContent = "Form submitted."
}

const button = document.getElementById("button")
button.addEventListener("click", submitForm);
```

### 22. Why are event listeners the preferred way to handle events?

### 23. What are the benefits of using named functions in your listeners?

### 24. How do you attach listeners to groups of nodes?

### 25.What is the difference between the return values of querySelector and querySelectorAll?

### 26. What does a “nodelist” contain?

### 27.Explain the difference between “capture” and “bubbling”.

### 28. What is the difference between objects and arrays?

### 29. How do you access object properties?
