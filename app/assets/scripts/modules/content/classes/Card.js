class Card {
	constructor(course) {
		this.course = course;
	}

	GenerateTemplate() {
		let template = `
            <div class="card">
                <div class="card__side card__side--front">
                    
                    <div class="card__image card__image--${this.course['ImageIndex']}">
                        <div class="card__image--caption-head card__image--caption-head--${this.course['ImageIndex']}">
                            <span class="card__image--caption-title card__image--caption-title--${this.course[
								'ImageIndex'
							]}">${this.course['CourseMainTitle']}</span>
                        </div>
                    </div>
                    <div class="card__features">
                        <ul>${this.course['CourseFeatures']}</ul>
                    </div>
                </div>
                
            <div class="card__side card__side--back">
                <div class="card__certificate card__certificate--${this.course['ImageIndex']}"></div>
                    <div class="card__properties">
                        <div class="card__title">
                            ${this.course['CourseSubTitle']}
                        </div>
                        <ul class="card__details">
                            <li><span class="strong">Instructor:</span> <a href="${this.course[
								'CourseInstructorLink'
							]}">${this.course['CourseInstructor']}</a></li>
                            <li><span class="strong">Completed:</span> on ${this.course[
								'CourseCompletedDate'
							]} at <a href="http://udemy.com">Udemy</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;

		return template;
	}
}

export default Card;
