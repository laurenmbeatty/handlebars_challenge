$(document).ready(function() {
//Get the template script from html
	var theTemplateScript = $("#person-template").html();
//Copile the Template
	var theTemplate = Handlebars.compile(theTemplateScript);

//Here is my data object

	var context = {
		"firstName": "Lauren",
		"lastName": "Beatty",
		"city": "Maple Grove",
		"state": "Minnesota",
		"husband": "Tony Thomann",
		"son1": "Hal Beatty",
		"son2": "Fritz Thomann",
		"dog": "Victory Carl",
		"description": "If you'd like to learn more, click here: ",
		"example": "<button>Learn More About Lauren</button"
	};

//Passing my data to the template looks like this:
//it uses theTemplate var, which uses the Handlebars.compile(whatever your data is);
//in this case it's the context object.

var theCompiledHtml = theTemplate(context);

//Putting theCompiledHtml on the page at the .placeholder id

$(".placeholder").html(theCompiledHtml);

});