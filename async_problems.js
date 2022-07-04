/*

Users API url: https://jsonplaceholder.typicode.com/users
Todos API url: https://jsonplaceholder.typicode.com/todos
Users API url for specific user ids : https://jsonplaceholder.typicode.com/users?id=2302913&id=2399&id=28193829138
Todos API url for specific user Ids : https://jsonplaceholder.typicode.com/todos?userId=2321392&userId=213921398


Q1.Write a function to fetch list of all todos from the above url using both fetch and axios.get.
		
	A. use promises 
	B. use await keyword 	
	
    C. Once the list is fetched.Group the list of tasks based on user IDs.
        Make sure the non completed tasks are always in front.
	{ 
		userId1: [ // All the tasks of userId1]
        	,
		userId2: [ // All the tasks of userId2]

        ...
    
    D.  Also Group tasks based on completed or nonCompleted for each user
        { 
          completed: [..All the completed tasks],
          nonCompleted: [...All the non completed tasks]
        }

    E. Dump the results in a file.

        {
            A: solutionA,
            B: solutionB,
            c: solutionC,
            ...
        }

Q2. Write a method that returns a promise to read a File (use fs.readFile inside). 
        your method readFile should use fs.readFile and return a promise.
        your method readFile should accept a file path.
        your method should throw an error with message saying "Missing File." if path is incorrect.
        your method should also accept another optional params for transformation of the data .        
       
        write a method for Transformation of data after read operation ...in the form [solutionA, solutionB, solutionC, solutionD].

Q3. Write a function to get all the users information from the users API url. Find all the users with name "Nicholas". 
Get all the to-dos for those user ids.

Q4. Write a function that takes any number of arguments (userIds) ..and makes api call to fetch the user details.

        A. use Promises.all and make api call for each user
        B. use only 1 api call to get all the results.


Q5. Promisify the following "sayHelloWorld" function 

    const sayHelloWorld = () => {
        window.setTimeout(() => {
            console.log('Hello World')
        }, 1000)

        return;
    }

    (function executeSayHelloWorld () {
        sayHelloWorld();
        console.log('Hey');
    })()

    Note: You need to execute Question 5 on browser due to window.setTimeout.
    Upon running the function in browser you would notice ..that 
    "Hey" gets printed first and then "Hello World".
    Promisify sayHelloWorld so that.."Hello World" gets printed first and then "Hey".

*/


