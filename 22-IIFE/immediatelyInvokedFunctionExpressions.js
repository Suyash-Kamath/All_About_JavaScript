/*


    Definition:

An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
The main purpose of an IIFE is to execute a function immediately after it's created and to avoid polluting the global scope with variables, keeping the code modular and clean.
Why Use an IIFE?

To avoid global scope pollution, meaning that variables declared inside the IIFE are not accessible outside of it.
It is useful when you need to execute some setup code (like connecting to a database) as soon as the application starts, but don’t want the variables and functions inside to be accessible globally.
It is somewhat similar to React's useEffect, where certain code runs when a component is mounted or updated.
How IIFE Works:

It uses the function expression syntax (anonymous or named function) wrapped in parentheses.
Immediately after defining the function, it is followed by another set of parentheses () which executes the function immediately.
Example of IIFE:

javascript
Copy code
(function() {
    console.log('This will run immediately');
})();
In this example:

The function is declared and invoked at the same time.
This prevents any variables or functions inside the IIFE from leaking into the global scope.
Common Use Case:

Suppose you want your application to immediately connect to a database when it starts:
javascript
Copy code
(function() {
    const dbConnection = connectToDatabase();
    console.log('Database connected');
})();
Here:

The dbConnection variable is only accessible within the IIFE, keeping the global scope clean.
Benefits of IIFE:

Scope Encapsulation: Variables declared inside the IIFE cannot be accessed from outside, preventing conflicts.
Global Scope Pollution Prevention: Helps avoid accidentally overwriting variables or functions in the global namespace.
Immediate Execution: Ensures that the function is executed right away when the script runs.
How It's Similar to React's useEffect:

Just like how useEffect runs some code when the component mounts or updates, an IIFE allows you to run code immediately when the script is loaded.
Both are useful for performing side effects like setting up a database connection or adding event listeners.
Key Points:
IIFE Syntax:
javascript
Copy code
(function() {
    // Code that runs immediately
})();
Avoid Global Scope Pollution: Variables inside the IIFE are local and don’t affect the global scope.
Use Cases: Initializing setups, database connections, event handlers, or any code that should run immediately.

 */
/*

Case of Global Scope Pollution
Global scope pollution occurs when variables or functions declared in the global scope (outside of any function) can accidentally be overwritten or cause conflicts with other parts of the program, leading to unpredictable behavior or bugs.

When too many variables are declared globally, it becomes harder to manage them, and they might interfere with each other, especially in larger applications or when integrating third-party scripts.

Example of Global Scope Pollution

Example of Global Scope Pollution
Without Proper Scoping (Polluted Global Scope):
javascript
Copy code
// Declaring variables in the global scope
var user = "Suyash";  
var dbConnection;

function connectToDatabase() {
    dbConnection = "Database Connected";
}

function showUser() {
    console.log(user);
}

// Calling the functions
connectToDatabase();
showUser();

// Now, someone else also uses a variable named `user`
var user = "Another User";  // This overwrites the previous `user` variable

showUser();  // Output: "Another User" (unexpected!)
What Happened:
The variable user was declared in the global scope.
Another part of the application or a third-party script also used the same variable user, overwriting the original value.
When we call showUser(), it no longer prints the original user "Suyash" but instead prints "Another User", leading to unexpected results.
This is called global scope pollution, where the global namespace gets crowded with too many variables that can accidentally be modified.
Fixing Global Scope Pollution Using IIFE
By using an Immediately Invoked Function Expression (IIFE), we can avoid polluting the global scope.

With IIFE (Preventing Pollution):
javascript
Copy code
(function() {
    // Variables are scoped to this IIFE and won't affect the global scope
    var user = "Suyash";
    var dbConnection;

    function connectToDatabase() {
        dbConnection = "Database Connected";
    }

    function showUser() {
        console.log(user);
    }

    // Calling the functions within the IIFE
    connectToDatabase();
    showUser();  // Output: "Suyash"
})();

// Global code can have its own variables without interference
var user = "Another User";  // This is a separate variable
console.log(user);  // Output: "Another User"
What Changed:
By wrapping everything inside an IIFE, the user variable inside the function is local to that IIFE, and it doesn't affect the user variable in the global scope.
Now, the IIFE version of user is safely encapsulated, and no pollution occurs in the global scope.
Outside the IIFE, you can have another user variable, and they won’t conflict with each other.
Summary:
Global scope pollution can lead to unexpected behavior if global variables are accidentally overwritten or modified.
Using IIFE (or other modular patterns) helps avoid global scope pollution by encapsulating variables and functions within a local scope.
*/



(function chai(){
    // Named IIFE
    console.log(`Database Conected ...`);
    
})();

// when you write 2 iife just end the first with ';'
(()=>{
console.log(`Database connection sucessful`);

})()

console.log('Everything is fine');

((name)=>{
    // Simple IIFE
    console.log(`${name}, Database is connected successfully`);
    
})('Suyash');

// there is something wrong with arrow function ? why it is not working ? Everything is perfect
// IIFE is invoked but it doesn't know where to stop the context , we use ';' 

