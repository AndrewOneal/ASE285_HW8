# Assignment 8

## Requirements (User Stories)

As a system admin, I want to create an encrypted password file from a plain text password file and be able to encrypt and decrypt password files so that the user’s passwords remain secure, yet accessible when needed.

As a user with a local machine, I want to have the ability to store a collection of emails and passwords in a file that I can encrypt and decrypt locally so that I can access and modify the list whenever I want without needing an internet connection.

## Module Design

There are three key parts to this piece of software: makepassword.js, which creates an encrypted file from an unencrypted file, passwordjs.js, which authenticates an inputted email and password, and utility.js, which holds functions to hash passwords and read and write files. This allows the user to input an unencrypted text file containing emails and passwords, generate an encrypted version of that file by hashing the passwords, and then use passwordJS to authenticate an input username and password. You can use the software as follows:

1. Prepare your unencrypted text file (named “password.txt”) of usernames in passwords with the format “username:password” with one username and password per line. 
2. Run the makepassword.js file by using the terminal with the command “node src/makepassword” which will call the function within it named “makePassword” that passes in the password file name (password.txt) and the desired encrypted file name (password.enc.txt by default) as arguments.
3. The function will read through the unencrypted file line by line and hash each password using the hash() function from utility.js and then write it into the new encrypted file specified in the arguments passed in to the makePassword function using the format “email:hashedPasword”.
4. You can now authenticate email/password combinations using passwordjs.js by entering the following command in the terminal: “node src/passwordJS <encryptedFilename> <email> <password>” which will call the function passwordjs() within passwordjs.js. This will read the arguments from the terminal and verify that the inputted email/password combination exist in the specified encrypted password file, and then returns true if the combination exists, and false if it does not exist.