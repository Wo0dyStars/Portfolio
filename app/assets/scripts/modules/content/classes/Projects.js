const Projects = {
	houseStocker: {
		title: 'House Stocker',
		tag: 'Express application using REST APIs deployed in Heroku',
		date: '10/04/2020 - 10/05/2020',
		detail:
			'This application has been developed to maintain information about the currently stored items (mainly food) in the households. People can register themselves and play with their family members. It is designed to let people insert shopping lists to see how much they spend on these items. They can see what items they purchased the most and the system tells them when they run out of items.',
		link: 'https://pacific-fortress-95051.herokuapp.com/',
		images: [
			"url('assets/images/projects/houseStocker/image2.png')",
			"url('assets/images/projects/houseStocker/image1.png')",
			"url('assets/images/projects/houseStocker/image3.png')",
			"url('assets/images/projects/houseStocker/image4.png')",
			"url('assets/images/projects/houseStocker/image5.png')"
		],
		sampleCode: [
			{
				title: 'Search request route handler',
				description:
					"In this code, you can see how I used Express with Node to handle a search request for 'Items' made by the user. I used regex to search the 'name' field in the 'Items' documents, which results with any finding that matches the provided text, even partially. For example, the search word 'app' would find the item name 'apple' as well. Flash messages help sending immediate feedback to the user whether the query was successful or not.",
				photo: 'assets/images/projects/houseStocker/project-code-1.png'
			},
			{
				title: 'Mongoose Schema definition',
				description:
					"In this example, I will show how I declared a Mongoose Schema for 'Teams'. This is the structure how the database saves data about the registered teams in the application. For example, a team has a list of users that belong to the team and requests as well, which indicates the list of users who wish to join this team. This part was a challenge for me, since querying this structure is complicated.",
				photo: 'assets/images/projects/houseStocker/project-code-2.png'
			},
			{
				title: 'CSS Sass structure',
				description:
					"This example shows how I used nested structure in CSS Sass. The way I named my classes in HTML allowed me to dig deeper in the name chain. For example, '&-avatar' stands for '.user-profile__main-avatar'. This is a simple way of keeping things organized.",
				photo: 'assets/images/projects/houseStocker/project-code-3.png'
			},
			{
				title: 'EJS view',
				description:
					'The following example is a piece of the markup code written in EJS, which is useful for combining JavaScript-like code with HTML. This is where I display purchases to the users and EJS helps me iterate over a list of information.',
				photo: 'assets/images/projects/houseStocker/project-code-4.png'
			}
		]
	},

	sharedHouse: {
		title: 'Shared House',
		tag: 'Angular application using Express routes deployed in Elastic Beanstalk',
		date: '04/07/2020 - 17/07/2020',
		detail:
			'This project has been built to get some practical sense using Angular and understand the principles of communicating with Node server. The content is designed for shared houses, where people wish to find better ways of dealing with conflicts of interest, lack of space and cultural differences. House members can keep a record of who did what and earn points for their activities. This way, they can easily find out if there is uneven amount of contribution.',
		link: 'http://sharedhouse-env.eba-ymfiekfv.eu-west-2.elasticbeanstalk.com/',
		images: [
			"url('assets/images/projects/sharedHouse/image3.png')",
			"url('assets/images/projects/sharedHouse/image2.png')",
			"url('assets/images/projects/sharedHouse/image4.png')",
			"url('assets/images/projects/sharedHouse/image5.png')"
		],
		sampleCode: [
			{
				title: 'Angular main routing module',
				description:
					"In this code, I specified the routes the Angular app would use. The path 'authorization' leads to the Sign in/Sign up module, the 'confirmation:id' is necessary for the email verification when the users clicks on the verification code. The path 'users' contains all the subroutes where the main application features exist. I also implemented lazyloading, which means if a user only visits the authorization page, they will not download the rest of the application.",
				photo: 'assets/images/projects/sharedHouse/project-code-1.png'
			},
			{
				title: 'Email validation in Authorization template',
				description:
					"I shared this example, because it shows how I was thinking in validating the user inputs. The user receives immediate response for their provided values, so they will know how to correct them. The 'emailNotAvailable' directive (not built-in) checks the given email whether or not it exists in the database already. The bootstrap classes 'alert-danger' and 'alert-success' show messages in nice format.",
				photo: 'assets/images/projects/sharedHouse/project-code-2.png'
			},
			{
				title: 'HTTP Request to Node server from Authorization service module',
				description:
					'This is important, because the Angular front-end communicates with the Node.js server via HTTP calls. In this example, there is a POST request towards the server for creating a new user, which receives user credentials and current URL. The response, as specified in the request in TypeScript format, will be a message (error or success) and the newly created userID. The message Subject variable is helpful for carrying information across multiple components, so in the Authorization component, I can display it easily.',
				photo: 'assets/images/projects/sharedHouse/project-code-3.png'
			},
			{
				title: 'Home routers on server-side',
				description:
					'I am showing this code snippet to illustrate how I am structuring my code. There are several routes for which I am calling the controllers. This way the code is more transparent.',
				photo: 'assets/images/projects/sharedHouse/project-code-4.png'
			},
			{
				title: 'Create User controller on server-side',
				description:
					'The following code implements the controller for creating a new user. It receives the password, which it gets hashed by Bcrypt and only the hashed password will be stored in the database. I am using Crypto to generate a new token for the user, which will be sent to them by using NodeMailer. The email constructs a verification email which will redirect the user to the front-end and next it sends request to the server with the confirmation code. And if that is valid then the user gets verified and therefore can log into the application.',
				photo: 'assets/images/projects/sharedHouse/project-code-5.png'
			}
		]
	},

	portfolio: {
		title: 'Portfolio',
		tag: 'HTML / CSS dynamic site with a touch of JavaScript deployed in GitHub',
		date: '03/04/2020 - ',
		detail:
			'This project is an ongoing process which showcases my current knowledge and skills in my Web Development career. As soon as I learn new skills or better practical ways of laying out elements or information, I will update this very soon.',
		link: 'http://peterkertesz.com',
		images: [
			"url('assets/images/projects/portfolio/image1.png')",
			"url('assets/images/projects/portfolio/image2.png')",
			"url('assets/images/projects/portfolio/image3.png')"
		],
		sampleCode: [
			{
				title: 'Webpack configuration',
				description:
					'This is my webpack configuration, which is mainly responsible for transforming and minifying CSS files and placing the output in the HTML file.',
				photo: 'assets/images/projects/portfolio/project-code-1.png'
			},
			{
				title: 'BEM methodology in the template',
				description:
					'This is meant to show how I am naming my classes in order to work smoothly with CSS. It tends to be longer than normal class names, but I mainly work on styling rather than template, so this approach is best for me.',
				photo: 'assets/images/projects/portfolio/project-code-2.png'
			},
			{
				title: 'Sass selector structure',
				description:
					'This example demonstrates how deep I can travel with this way of referencing. Increased transparency and neat layout.',
				photo: 'assets/images/projects/portfolio/project-code-3.png'
			}
		]
	},

	businessDirectory: {
		title: 'Business Directory',
		tag: 'ReactJS and PHP web application deployed in Heroku',
		date: '27/10/2020 - 12/11/2020',
		detail:
			'This project has been developed in response to the task required by IT Career Switch. It is a company directory system, which stores details of all employees working to a given company. It assumes that only administrators access this system so no authentication process is required. They can see all details of employees, edit or delete them. They can also set new locations or departments and edit those too. ',
		link: 'https://boiling-shore-15346.herokuapp.com/',
		images: [
			"url('assets/images/projects/businessDirectory/image2.png')",
			"url('assets/images/projects/businessDirectory/image1.png')",
			"url('assets/images/projects/businessDirectory/image3.png')",
			"url('assets/images/projects/businessDirectory/image4.png')",
			"url('assets/images/projects/businessDirectory/image5.png')",
			"url('assets/images/projects/businessDirectory/image6.png')"
		],
		sampleCode: [
			{
				title: 'Request data from React lifecycle hook',
				description:
					'This is an example of using my function ServerAPI to request data from PHP server. The code calls two different APIs after each other and handles errors appropriately.',
				photo: 'assets/images/projects/businessDirectory/codeSample1.png'
			},
			{
				title: 'Process Insert request in PHP',
				description:
					'The code first checks whether there was a POST request and if yes it trims the posted name and it also checks whether the data is empty or not. It inserts a new row into the database and returns the ID of that row',
				photo: 'assets/images/projects/businessDirectory/codeSample2.png'
			},
			{
				title: 'Leveraging Sass to make functions',
				description:
					'This code allows for easy handling of media queries in the Sass files. It also has other functions that handle commonly used CSS rules',
				photo: 'assets/images/projects/businessDirectory/codeSample3.png'
			}
		]
	},

	countryMaps: {
		title: 'Country Maps',
		tag: 'JavaScript application with AJAX using PHP and cURL deployed in Heroku',
		date: '21/10/2020 - 25/10/2020',
		detail:
			'This project has been developed in response to the task required by IT Career Switch. It is meant to display a LeafletJS map on the screen with all the countries in the world. Users can navigate around the map by selecting a country and see some details, photos or weather about that. This project was a good practice for asyncronous AJAX calls using PHP cURL.',
		link: 'https://ancient-inlet-52320.herokuapp.com/',
		images: [
			"url('assets/images/projects/countryMaps/image2.png')",
			"url('assets/images/projects/countryMaps/image1.png')",
			"url('assets/images/projects/countryMaps/image3.png')",
			"url('assets/images/projects/countryMaps/image4.png')",
			"url('assets/images/projects/countryMaps/image5.png')"
		],
		sampleCode: [
			{
				title: 'Processing of cities data and creating markers',
				description:
					'This code demonstrates how I made use of the returned data from a country API. All the cities returned were in ascending order by population size and they each fell into a corresponding population category. When the locations and categories were ready, I displayed them on the map.',
				photo: 'assets/images/projects/countryMaps/codeSample1.png'
			},
			{
				title: 'Displaying weather data by using jQuery',
				description:
					'This code shows how I manipulated the DOM to display current weather data dynamically in regards to the selected country.',
				photo: 'assets/images/projects/countryMaps/codeSample2.png'
			},
			{
				title: 'Updating the map legend',
				description:
					'This code is interesting, it uses LeafletJS legend feature to update information according to the selected country.',
				photo: 'assets/images/projects/countryMaps/codeSample3.png'
			}
		]
	}
};

export default Projects;
