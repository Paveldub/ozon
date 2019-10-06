export default function addCart() {
	const cards = document.querySelectorAll('.goods .card'),
		cartWrapper = document.querySelector('.cart-wrapper'),
		cartEmpty = document.getElementById('cart-empty'),
		countGoods = document.querySelector('.counter');

	cards.forEach((card) => {
		const btn = card.querySelector('button');

		btn.addEventListener('click', () => {
			const cardClone = card.cloneNode(true);
			cartWrapper.appendChild(cardClone);
			showData();

			const removeBtn = cardClone.querySelector('.btn');
			removeBtn.textContent = 'Удалить из корзины';

			removeBtn.addEventListener('click', () => {
				cardClone.remove();
				showData();
			});
		});
	});

	function showData() {
		let countElems = cartWrapper.querySelectorAll('.card'),
			cardsPrice = cartWrapper.querySelectorAll('.card-price'),
			cartTotal = document.querySelector('.cart-total span'),
			sum = 0;

		countGoods.textContent = countElems.length;

		cardsPrice.forEach((cardPrice) => {
			let price = parseFloat(cardPrice.textContent);
			sum += price;
		});

		cartTotal.textContent = sum;

		if (countElems.length !== 0) {
			cartEmpty.remove();
		} else {
			cartWrapper.appendChild(cartEmpty);
		}
	}
}