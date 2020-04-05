import Card from './content/classes/Card';
import Courses from './content/classes/CardObject';

Courses.forEach((course) => {
	let template = new Card(course).GenerateTemplate();
	document.querySelector('.courses').insertAdjacentHTML('beforeend', template);
});

export default Courses;
