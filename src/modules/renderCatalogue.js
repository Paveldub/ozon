import filter from './filter';

export default function renderCatalogue() {
	const cards = document.querySelectorAll('.goods .card');
	let categories = new Set();
	const catalogue = document.querySelector('.catalog-list');
	const catalogueBtn = document.querySelector('.catalog-button');
	const catalogWrapper = document.querySelector('.catalog');

	cards.forEach((card) => {
		categories.add(card.dataset.category);
	});

	categories.forEach((category) => {
		let li = document.createElement('li');
		li.innerHTML = category;
		catalogue.appendChild(li);
	});

	const allLi = catalogue.querySelectorAll('li');
	let titleh5 = document.querySelector('.filter-title h5');

	catalogueBtn.addEventListener('click', function(e) {
		if (catalogWrapper.style.display) {
			catalogWrapper.style.display = '';
		} else {
			catalogWrapper.style.display = 'block';
		}

		if (e.target.tagName === 'LI') {

			allLi.forEach((elem) => {
				if (elem === e.target) {
					elem.classList.add('active');
				} else {
					elem.classList.remove('active');
				}
			})

			filter();

			titleh5.textContent = e.target.textContent;
		}
	});
}