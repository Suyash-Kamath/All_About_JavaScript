/*

Stack Memory

Primitive Datatype


Heap Memory
Non-Primitive Datatype

*/


let myYoutubeName = "Suyash Kamath"
let anotherName = myYoutubeName

console.log(myYoutubeName);
console.log(anotherName);

let user = {
    email:"suyash@google.com",
    user:"user@oksbi"

}

let user2 = user
console.log(user);
console.log(user2);


user2.email="kamath@gmail.com"

console.log(user);
console.log(user2);


/*

Stack Memory in JavaScript
Definition: The stack is a region of memory that operates in a Last In, First Out (LIFO) manner,
 used for managing function calls, execution contexts, and local variables.

Purpose: It manages the execution context of functions, including primitive data types like numbers, 
strings, booleans, and references to objects and functions.

Speed: Stack memory is faster to access compared to heap memory because of its LIFO structure, which 
allows for quick allocation and deallocation.

Scope: It stores variables with function scope or block scope (let, const, and var in functions).

Memory Management:

Automatic allocation and deallocation happen when a function is called and returns.
Memory is released when execution leaves the scope of the function.
Limitations:

Limited in size, and deep recursion can lead to stack overflow errors.
Not suitable for dynamic memory allocation or data that needs to persist beyond a function call.




Heap Memory in JavaScript
Definition: The heap is a larger, more flexible region of memory used for dynamic memory allocation, 
where variables and objects are stored.

Purpose: It stores objects, arrays, and functions—basically anything that requires dynamic memory 
allocation and needs to persist beyond a function call.

Speed: Heap memory is slower to access than stack memory due to its complex allocation patterns and 
the need for garbage collection.

Scope: Objects and variables stored in heap memory can be accessed from anywhere in the code if a 
reference is maintained.

Memory Management:

JavaScript uses garbage collection (like Mark-and-Sweep) to manage heap memory, automatically freeing up
 memory that is no longer reachable.
Variables persist as long as there are references pointing to them.
Advantages:

Suitable for storing large amounts of data that don’t fit within the stack’s constraints.
Allows dynamic memory allocation, enabling the creation of complex data structures like linked lists, trees, 
and graphs.
Limitations:

Slower performance due to dynamic memory allocation and garbage collection.
Fragmentation can occur, leading to inefficient memory use over time.
Key Differences
Memory Size: Stack is small and limited, while the heap is larger and flexible.
Access Speed: Stack is faster; heap is slower due to dynamic nature and garbage collection.
Usage: Stack for function calls and primitive variables; heap for objects, arrays, and functions.
Lifespan: Stack variables are short-lived (function scope), while heap variables can be long-lived 
(exist as long as needed).
Important Considerations
Avoid Memory Leaks: In JavaScript, memory leaks occur when references to objects persist even when they're 
no longer needed, preventing the garbage collector from freeing that memory.
Optimizing Performance: Minimize heap usage and avoid unnecessary global variables. Clean up references to
 objects that are no longer needed to ensure efficient memory management.





 Garbage Collection in JavaScript
Garbage collection (GC) in JavaScript is an automatic memory management feature that helps in reclaiming 
memory occupied by objects that are no longer in use, thus preventing memory leaks and optimizing application 
performance.

Key Concepts of Garbage Collection
Automatic Memory Management: JavaScript automatically allocates memory when objects are created and frees it when
 they're no longer needed. Developers don’t manually manage memory, which reduces the complexity of coding but
  requires awareness of how GC works to avoid performance issues.

Reachability: An object is considered "reachable" and therefore needed if it can be accessed directly or 
indirectly from the root (e.g., the global object, currently executing functions, their variables, and the call 
stack). Objects that are not reachable are marked for garbage collection.

Garbage Collection Algorithms:

Mark-and-Sweep: This is the most common algorithm used by JavaScript engines like V8 (used in Chrome and Node.js).
 It works in two phases:
Marking Phase: It starts from the roots, marking all reachable objects. If an object can be reached, it’s marked
 as “live”.
Sweep Phase: It then sweeps through the memory, collecting unmarked objects (i.e., those that are not reachable) 
and freeing their memory.
Reference Counting: An older, less common method where each object has a count of references pointing to it. When 
the count drops to zero, the object is collected. However, this method struggles with circular references (objects
 referencing each other) that are unreachable but still have non-zero reference counts.
Generational Garbage Collection: Modern JavaScript engines use generational GC, which divides objects into:

Young Generation: For short-lived objects that are frequently created and quickly collected.
Old Generation: For objects that survive multiple garbage collection cycles, suggesting they are long-lived.
This approach improves efficiency by focusing more on collecting short-lived objects, which are the majority.

Incremental and Concurrent Garbage Collection:

Incremental GC: Breaks down the GC process into smaller chunks rather than doing it all at once, reducing the 
impact on performance (avoiding noticeable pauses).
Concurrent GC: Runs in parallel with the JavaScript code execution, further minimizing pauses and improving 
application responsiveness.
Performance Considerations
Avoid Unnecessary Global Variables: Global variables persist throughout the life of the application, making 
them harder for the GC to clean up.
Break Circular References: Circular references, especially in closures or DOM elements, can lead to memory 
leaks if not managed properly.
Manual Cleanup: For certain resources (like DOM elements or complex data structures), explicitly nullifying 
references can help GC by making objects unreachable.
Common Causes of Memory Leaks
Forgotten Timers and Callbacks: Unreferenced timers or callbacks that are still active can hold onto objects
 unnecessarily.
Closures: Closures can unintentionally keep references to variables, leading to longer memory retention.
Unremoved Event Listeners: Not removing event listeners from objects that are no longer needed can cause
 memory to be retained.
Best Practices
Use let and const: Avoid var for block-scoped variables that are easier for GC to handle.
Scope Management: Limit the scope of variables and functions to reduce the memory footprint.
Debugging Tools: Use browser developer tools to monitor memory usage and identify leaks.
Garbage collection is a critical part of JavaScript’s memory management, enhancing performance by reclaiming
 unused memory but also requiring careful coding practices to avoid inefficiencies and leaks.

*/
