# CoderBabez

##  Week Twelve - Loops

### Objectives
Learn about for loops and how we can use them to repeat tasks, and iterate over arrays.

### Vocab
* for loop
* iterate

### Do Now - Arrays
Append every item in this array, in order, to the body of the page.
```
var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];
```

### Lesson - Loops!

Last week we learned about arrays! Arrays are lists of data.

Often we want to perform the same task for every piece of data in an array - like print all of our user names onto a page. But as you saw in the Do Now, that can be pretty tedious.

INTRODUCING.... FOR LOOPS!

For loops let us repeat a task a set number of times.

They look like this:
```
for(var i = 0; i < 5; i++){
  // CODE TO REPEAT
}
```

For loops have...
* A start value (stored in a variable): `var i = 0`
* An end condition (checked every time we run the loop): `i < 5`
* An update expression (run every time we end one iteration): `i++`

Let's run through a loop together:
```
for(var i = 0; i < 5; i++){
  console.log(i);
}
```

Let's work through that loop together ...
| Value of i | Code to Run | i++  |
| -----------|-------------| -----|
| | | |
| | | |
| | | |
| | | |
| | | |

#### Check for understanding

1. What will log to the console?
```
for(var x = 10; x > -1; x=x-2){
  console.log(x);
}
```
Check that code in jsfiddle.net! Does it match your guess?


2. Can you make a for loop that prints only odd numbers less than 20?
```
for(var i =  ; i     ; i      ){
  console.log(i);
}
```
Check that code at jsfiddle.net! Does it work?

#### Using For Loops with Arrays

Let's look at an array
```
var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];
```
I can log the first item of the array to the console....
```
console.log(students[0]);
```
I can even use a variable to access an item in the array....
```
var index = 2;
console.log(students[index]);
```
I can also use the variable in the for loop to access an item in the array ...

```
for(var i = 0; i < 5; i++){
  console.log(students[i]);
}
```
Let's work through that loop together ...
| Value of i | Code to Run | i++  |
| -----------|-------------| -----|
| | | |
| | | |
| | | |
| | | |
| | | |

That's pretty great, but what if I added another item to my array? Does it still do what we want? Why or why not?
```
var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];
students.push("Melissa");
for(var i = 0; i < 5; i++){
  console.log(students[i]);
}
```
We now have 6 items in the array, so the loop condition should be less than 6, not 5.

Is there something we can use to get the current number of items in the array?
```
var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];
students.push("Melissa");
for(var i = 0; i < students.length; i++){
  console.log(students[i]);
}
```
#### Check for understanding

1. Can you make a loop that prints all the students in the list in reverse?
```
var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];
for(                     ){

}
```
Check your code at jsfiddle.net! Does it work?

### Project

We're going to create a simple classroom roster page.

Demo:
https://megknoll.github.io/coderbabez-wk12-js-8/solution/

Tasks:
1. Create a starting list of students
2. Create a function that displays those students in the student section (must use for loops)
3. When the page loads, display all the students
4. When the input button is clicked, get the new student name, add it to the students array, and re-display students.

## Homework

Finish the project!

If you need bonus tasks:
* Update the array and the displayStudents function so the page shows both student images and names.
* Update the add student section to allow users to give an image with the student names
* Also update the page so you can remove a students and then re-display the page.

# Reference:

* https://jsfiddle.net/
* https://www.w3schools.com/js/js_loop_for.asp
