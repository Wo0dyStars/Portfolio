const Projects = {
	houseStocker: {
		title: 'House Stocker',
		tag: 'Express application using REST APIs deployed in Heroku',
		date: '10/04/2020 - 10/05/2020',
		detail:
			'This application has been developed to maintain information about the currently stored items (mainly food) in the households. People can register themselves and play with their family members. It is designed to let people insert shopping lists to see how much they spend on these items. They can see what items they purchased the most and the system tells them when they run out of items.',
		link: 'https://pacific-fortress-95051.herokuapp.com/',
		images: [
			"url('assets/images/projects/houseStocker/house-storage-2.png')",
			"url('assets/images/projects/houseStocker/house-storage-1.png')",
			"url('assets/images/projects/houseStocker/house-storage-3.png')",
			"url('assets/images/projects/houseStocker/house-storage-4.png')",
			"url('assets/images/projects/houseStocker/house-storage-5.png')",
			"url('assets/images/projects/houseStocker/house-storage-6.png')",
			"url('assets/images/projects/houseStocker/house-storage-7.png')",
			"url('assets/images/projects/houseStocker/house-storage-8.png')"
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
			'This application has been developed to maintain information about the currently stored items (mainly food) in the households. People can register themselves and play with their family members. It is designed to let people insert shopping lists to see how much they spend on these items. They can see what items they purchased the most and the system tells them when they run out of items.',
		link: 'http://sharedhouse-env.eba-ymfiekfv.eu-west-2.elasticbeanstalk.com/',
		images: [
			"url('assets/images/projects/sharedHouse/image3.png')",
			"url('assets/images/projects/sharedHouse/image2.png')",
			"url('assets/images/projects/sharedHouse/image4.png')",
			"url('assets/images/projects/sharedHouse/image5.png')",
			"url('assets/images/projects/sharedHouse/image6.png')",
			"url('assets/images/projects/sharedHouse/image7.png')",
			"url('assets/images/projects/sharedHouse/image8.png')",
			"url('assets/images/projects/sharedHouse/image9.png')"
		],
		sampleCode: [
			{
				title: 'Search request route handler',
				description:
					"In this code, you can see how I used Express with Node to handle a search request for 'Items' made by the user. I used regex to search the 'name' field in the 'Items' documents, which results with any finding that matches the provided text, even partially. For example, the search word 'app' would find the item name 'apple' as well. Flash messages help sending immediate feedback to the user whether the query was successful or not.",
				photo: 'assets/images/projects/sharedHouse/project-code-1.png'
			},
			{
				title: 'Mongoose Schema definition',
				description:
					"In this example, I will show how I declared a Mongoose Schema for 'Teams'. This is the structure how the database saves data about the registered teams in the application. For example, a team has a list of users that belong to the team and requests as well, which indicates the list of users who wish to join this team. This part was a challenge for me, since querying this structure is complicated.",
				photo: 'assets/images/projects/sharedHouse/project-code-2.png'
			},
			{
				title: 'CSS Sass structure',
				description:
					"This example shows how I used nested structure in CSS Sass. The way I named my classes in HTML allowed me to dig deeper in the name chain. For example, '&-avatar' stands for '.user-profile__main-avatar'. This is a simple way of keeping things organized.",
				photo: 'assets/images/projects/sharedHouse/project-code-3.png'
			},
			{
				title: 'EJS view',
				description:
					'The following example is a piece of the markup code written in EJS, which is useful for combining JavaScript-like code with HTML. This is where I display purchases to the users and EJS helps me iterate over a list of information.',
				photo: 'assets/images/projects/sharedHouse/project-code-4.png'
			},
			{
				title: 'EJS view',
				description:
					'The following example is a piece of the markup code written in EJS, which is useful for combining JavaScript-like code with HTML. This is where I display purchases to the users and EJS helps me iterate over a list of information.',
				photo: 'assets/images/projects/sharedHouse/project-code-5.png'
			}
		]
	}
};

export default Projects;
