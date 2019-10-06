export default function filter() {
	let cards = document.querySelectorAll('.goods .card');

	cards.forEach((card) => {
		let cardPrice = card.querySelector('.card-price');
		let price = parseFloat(cardPrice.textContent);
		let discount = card.querySelector('.card-sale');
		let discountCheckBox = document.getElementById('discount-checkbox');
		let min = document.getElementById('min');
		let max = document.getElementById('max');
		let activeLi = document.querySelectorAll('.catalog-list li.active');

		card.parentNode.style.display = '';

		if ((min.value && price < min.value) || (max.value && price > max.value)) {
			card.parentNode.style.display = 'none';
		} else if (discountCheckBox.checked && !discount) {
			card.parentNode.style.display = 'none';
		} else if (activeLi) {
			if (card.dataset.category != activeLi.textContent) {
				card.parentNode.style.display = '';
			}
		}
	});
}