import filter from './filter';

export default function actionPage() {
	const cards = document.querySelectorAll('.goods .card'),
		discountCheckBox = document.getElementById('discount-checkbox'),
		min = document.getElementById('min'),
		max = document.getElementById('max'),
		search = document.querySelector('.search-wrapper_input'),
		searchBtn = document.querySelector('.search-btn');

	discountCheckBox.addEventListener('change', filter);

	function searchValue() {
		const searchText = new RegExp(search.value.trim(), 'i');

		cards.forEach((card) => {
			const title = card.querySelector('.card-title');

			if (!searchText.test(title.textContent)) {
				card.parentNode.style.display = 'none';
			} else {
				card.parentNode.style.display = '';
			}
		});

		search.value = '';
	}

	min.addEventListener('change', filter);
	max.addEventListener('change', filter);
	searchBtn.addEventListener('click', searchValue);
}
