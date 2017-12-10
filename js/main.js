/*//AJAX = Asynchronous JavaScript And XMl
---------------------------------------------
//We can make request to a server or database for information without
//stopping our website application from running
--------------
//An AJAX call lets us do 4 different types of database requests. "CRUD"
//Create,,,,, Read,,,, Update,,, Delete
  ------------------------------------
Create -- Add something new to the database/server
Read-- just show me something from inside of the server
Update--  give me something from the server and let me change it
Delete-- erase from server
------------------------------------*/
//Using the free google books api, we can search through google's database of books and get 10 items of whatever we search for
//We need to wrap ajax inside a function if we want to run it after we click

function bookFinder(){
	var userInput = document.getElementById('search').value;

$.ajax({
	type:"GET",
	url:"https://www.googleapis.com/books/v1/volumes?q="+userInput,
	success:function(dataWeGetFromTheApi){
		//console.log(dataWeGetFromTheApi)
		var bookArray = dataWeGetFromTheApi.items
		for(i=0; i<bookArray.length; i ++){
			//create a child
			var titleDiv = document.createElement('div')
			//give child its information
			var titleText = document.createTextNode(bookArray[i].volumeInfo.title)
			//creating an getElementById
			var label = document.createElement('p');
			//create an image
			var image = document.createElement('img')
			image.setAttribute("src", bookArray[i].volumeInfo.imageLinks.thumbnail);

			//sending the image to the div
			titleDiv.appendChild(image);

      //send the created text to the div
			label.appendChild(titleText);
			titleDiv.appendChild(label);

			//display in the webpage
			display.appendChild(titleDiv);


             console.log(bookArray[i].volumeInfo);
           //  document.write(bookArray[i].volumeInfo.title)
		}

	}
})
}
document.getElementById('runSearch').addEventListener('click', bookFinder, false);
