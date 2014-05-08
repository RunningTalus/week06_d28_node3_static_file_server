Node 3: Static File Server

Objective

	Create a web server using NodeJS that can server static files.

Skills

	Scaffolding an express app.
	Understanding the relationship between client and server.
	Using the File System module.
	Asynchronous Operations

Resources

	http://nodejs.org/
	http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
	http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback



Requirements

Part I: Simple Web Server

	1) Create a new folder in your projects directory.
	
	2) cd into the newly created folder.
	
	3) Scaffold out a new express app with yo refactoru-express. Yeoman will automatically run npm install to install all dependencies (initially just express).
	
	4) Start your web server by running node app.js in terminal.
	
	5) Navigate your browser to http://localhost:PORT, where PORT is the port number printed to terminal when you started your server.  
	
	Success! You executed a node script which created an HTTP server. As long as the script continues to run in the terminal, it responds to HTTP requests that are sent to localhost. By entering http://localhost:PORT into your browser, you generated an HTTP request to your node server. Each request is responded to with a simple message of "Hello Boulder".

	Tip: You use nodemon to automatically restart your server when app.js changes. Just install nodemon with npm install -g nodemon then run nodemon app.js instead of node app.js.


Part II: Static File Server
	
	1) Add data.txt file to your directory. Insert some arbitrary text to the file.
	
	2) In app.js, include the File System core module by adding var fs = require('fs'); at the very top of the file. This provides file operations like read/write.

	3) Read the documentation for fs.readFileSync. Read the data.txt file with var fileContents = fs.readFileSync('data.txt');.
	
	4) Add res.header('Content-Type', 'text/html'); to add the HTTP response header that specifies the type of content we're sending to the browser.
	
	5) Change res.send to send the fileContents back to the user instead of the string literal.
	
	6) Restart your node server and refresh your browser. You should now see the contents of your text file written out to the page!
			
			readFileSync is Synchronous The problem with readFileSync is that it is a blocking method. This means that the server has to wait for the file to be loaded before moving on to the next instruction in your code. This is bad! The performance benifits of node are only realized when slow operations are performed asynchronously so that the server can continue to handle requests while waiting for the results. This is especially true in this example since reading from the file system is very slow. In the next part, you will make your static file server nonblocking.



Part III: Make it Asynchronous
	
	1) We're going to redo PART III using fs.readFile and callbacks. This blocking code:
			var fileContents = fs.readFileSync('data.txt');
					CHANGES TO... 
							fs.readFile('data.txt', function(err, data){
									// do something with data here
							});
	
	2) Move res.header(...) and res.send(...) into the fs.readFile callback so that they are executed after the file is read.
	
	3) Restart your node server and request the localhost url again. You should see the same result as in PART III!

		If you are having trouble with callbacks/asynchronous code, rember the golden rule of asynchronous programming: Anything that depends on the result of an asynchronous call must go inside the callback. Code that comes after the asynchronous call is executed before the callback.

		Success! So what's different? This time we utilized the asynchronous nature of node by passing a callback to the readFile function. This allows our code to move along normally without being blocked. Once the file has been loaded and the content is ready, node will invoke our callback and allow us to continue on with sending content back to the server.

Bonus: Static File Server

	Modify your route to allow the user to request any file by name. Files should be read from the 'public' folder. For example, http://localhost:PORT/data1.txt should respond with the contents of MYPROJECT/public/data.txt.

			app.get('/:filename', function(req, res) {
	 // access value of :filename with req.params.filename
	 // read the file with the specified filename
	 // send the contents of the file to the user
	});