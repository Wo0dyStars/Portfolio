class ImageSlides {
	constructor() {
		this.Arrows = document.querySelectorAll('.arrow');
		this.events();
	}

	events() {
		this.Arrows.forEach((arrow) => {
			arrow.addEventListener('click', (e) => {
				const images = document.getElementsByClassName('project-photos__photo');
				let currentIndex = 0;
				for (let i = 0; i < images.length; i++) {
					if (images[i].classList.contains('image-on')) {
						// turn off current image
						images[i].classList.remove('image-on');
						images[i].classList.add('image-off');
						currentIndex = i;
					}
				}

				let nextIndex = 0;
				if (e.target.classList.contains('leftarrow')) {
					// turn on next image
					nextIndex = currentIndex - 1;
					if (nextIndex < 0) {
						// turn on last image
						nextIndex = images.length - 1;
					}
				} else if (e.target.classList.contains('rightarrow')) {
					// turn on next image
					nextIndex = currentIndex + 1;
					if (nextIndex > images.length - 1) {
						nextIndex = 0;
					}
				}

				images[nextIndex].classList.remove('image-off');
				images[nextIndex].classList.add('image-on');
			});
		});
	}
}

export default ImageSlides;
