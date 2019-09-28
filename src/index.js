'use strict';

// checkbox start
function toggleCheckbox() {
	const checkboxes = document.querySelectorAll('.filter-check_checkbox');

	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener('change', function() {
			if (this.checked === true) {
				this.nextElementSibling.classList.add('checked');
			} else {
				this.nextElementSibling.classList.remove('checked');
			}
		});
	});
}
toggleCheckbox();
// checkbox end

// modal cart start
function toggleCart() {
	const btnCard = document.getElementById('cart');
	const modalCard = document.querySelector('.cart');
	const cartClose = document.querySelector('.cart-close');

	btnCard.addEventListener('click', () => {
		modalCard.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	cartClose.addEventListener('click', () => {
		modalCard.style.display = 'none';
		document.body.style.overflow = '';
	});
}
toggleCart();
// modal cart end

//goods start
function addCart() {
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
addCart();
//goods end

// filter hot sales
function actionPage() {
	const cards = document.querySelectorAll('.goods .card'),
		discountCheckBox = document.getElementById('discount-checkbox'),
		min = document.getElementById('min'),
		max = document.getElementById('max'),
		search = document.querySelector('.search-wrapper_input'),
		searchBtn = document.querySelector('.search-btn');

	discountCheckBox.addEventListener('change', function() {
		cards.forEach((card) => {
			if (this.checked) {
				if (!card.querySelector('.card-sale')) {
					card.parentNode.style.display = 'none';
				}
			} else {
				card.parentNode.style.display = '';
			}
		});
	});

	function filterPrice() {
		cards.forEach((card) => {
			const cardPrice = card.querySelector('.card-price');
			const price = parseFloat(cardPrice.textContent);

			if ((min.value && price < min.value) || (max.value && price > max.value)) {
				card.parentNode.style.display = 'none';
			} else {
				card.parentNode.style.display = '';
			}
		});
	}

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

	min.addEventListener('change', filterPrice);
	max.addEventListener('change', filterPrice);
	searchBtn.addEventListener('click', searchValue);
}

actionPage();
// end filter
