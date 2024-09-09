console.log("Suyash")


/*

In general, Node.js is designed to run JavaScript files, not text files. 
However, if you were able to run a .txt file with node test.txt, it might be because
 the file extension doesn’t strictly dictate the content of the file. Node.js will try to 
 interpret the file as JavaScript regardless of the extension.

Here’s how it works:

If the content inside test.txt is valid JavaScript code, Node.js will execute it as if it were a .js file.
The file extension is more about convention than a strict rule in this case.
So, if your .txt file contains JavaScript code, Node.js can run it just like it would run a .js file.




The difference between .js and .txt file extensions primarily lies in their intended use and how tools and systems recognize them:

Purpose:

.js is specifically used for JavaScript code files. Tools, editors, and systems recognize it as JavaScript, enabling features like syntax highlighting, code formatting, linting, and execution with JavaScript engines like Node.js.
.txt is used for plain text files. It’s a generic extension, meant for storing unformatted text, and does not specify any programming language.
Execution:

Node.js and other JavaScript engines are designed to run .js files as JavaScript code directly.
Node.js can still execute .txt files if they contain valid JavaScript code, but this is unconventional and 
not recommended for actual development.
Tooling and Editor Features:

Files with a .js extension are treated as JavaScript by editors and IDEs, which provide relevant features 
like IntelliSense, debugging support, and error checking.
.txt files won’t get these language-specific features since they are treated as plain text.
Convention and Clarity:

Using .js clearly indicates that the file contains JavaScript code, making it easier for others
 (and yourself) to understand the file’s purpose.
Using .txt for code might cause confusion since it’s not the standard or expected format for JavaScript code.
In summary, while you can run a .txt file with Node.js if it contains JavaScript code, it’s best practice
 to use the correct .js extension for clarity and to utilize the full benefits of development tools.

*/