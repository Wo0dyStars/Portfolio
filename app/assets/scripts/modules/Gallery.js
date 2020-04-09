class Gallery {
	constructor() {
		this.Projects = document.querySelectorAll('.projects__project');
		this.Project = document.querySelector('.projects ul');
		this.Active = document.querySelector('.projects__active');
		this.events();
	}

	events() {
		this.Project.addEventListener('click', (e) => {
			if (e.target && e.target.nodeName == 'LI') {
				if (this.Active.innerHTML !== '') {
					let li = document.createElement('li');
					li.appendChild(document.createTextNode(this.Active.innerHTML));
					li.classList.add('projects__project', this.Active.classList[1]);
					this.Project.appendChild(li);
					this.Active.innerHTML = '';
					this.Active.classList.remove(this.Active.classList[1], 'my-animation');
				}

				// Add item to the active panel
				this.Active.innerHTML = e.target.innerHTML;
				this.Active.classList.add(e.target.classList[1], 'my-animation');
				// Remove item from the list
				this.Project.removeChild(e.target);
			}
		});
	}
}

export default Gallery;
