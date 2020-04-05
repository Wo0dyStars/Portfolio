import Card from './content/classes/Card';

const Courses = [
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	},
	{
		CourseDone: `done`,
		CourseBadge: `Udemy course`,
		ImageIndex: `1`,
		CourseMainTitle: `Web Developer Workflow`,
		CourseSubTitle: `Git a Web Developer Job: Mastering the Modern Workflow`,
		CourseFeatures: `<li><span class="strong">Git</span>, <span class="strong">GitHub</span> and command-line basics</li>
            <li><span class="strong">Node.js</span> tools like <span class="strong">NPM</span> and <span class="strong">Webpack</span></li>
            <li><span class="strong">BEM</span> and <span class="strong">PostCSS</span> for organized and manageable code</li>
            <li><span class="strong">Mobile-first</span> performance philosophy</li>
            <li><span class="strong">JavaScript OOP</span> - structured code using <span class="strong">ES6</span></li>`,
		CourseInstructor: `Brad Schiff`,
		CourseInstructorLink: `#`,
		CourseCompletedDate: `02/22/2020`
	}
];

let title = new Card(Courses[0]);

// console.log(title.content);
// document.querySelector('.courses').insertAdjacentHTML('beforeend', title.content);
console.log(title.course['CourseDone']);
console.log(title.GenerateTemplate());
export default Courses;
