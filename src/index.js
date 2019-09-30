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
//goods end

// filter
function actionPage() {
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

	function filter() {
		cards.forEach((card) => {
			const cardPrice = card.querySelector('.card-price');
			const price = parseFloat(cardPrice.textContent);
			const discount = card.querySelector('.card-sale');

			if ((min.value && price < min.value) || (max.value && price > max.value)) {
				card.parentNode.style.display = 'none';
			} else if (discountCheckBox.checked && !discount) {
				card.parentNode.style.display = 'none';
			} else {
				card.parentNode.style.display = '';
			}
		});
	}
}
// end filter

//get data from server

function getData() {
	let url = '../db/db.json';

	const goodsWrapper = document.querySelector('.goods');

	return fetch(url)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(res.status);
			}
		})
		.then((data) => {
			return data;
		})
		.catch((e) => {
			console.warn(e);
			goodsWrapper.innerHTML = '<div style="color: red; font-weight: 700">Something went wrong!</div>';
		});
}

function renderCards(data) {
	data.goods.forEach((good) => {
		const card = document.createElement('div');
		const goods = document.querySelector('.goods');
		card.className = 'ol-12 col-md-6 col-lg-4 col-xl-3';

		card.innerHTML = `
				<div class="card" data-category="${good.category}">
				${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top" style="background-image: url('${good.img}')"></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price">${good.price} р</div>
						<h5 class="card-title">${good.title}</h5>
						<button class="btn btn-primary">В корзину</button>
					</div>
				</div>
		`;
		goods.appendChild(card);
	});
}
//end getData from server

function renderCatalogue() {
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

	catalogueBtn.addEventListener('click', function(e) {
		if (catalogWrapper.style.display) {
			catalogWrapper.style.display = '';
		} else {
			catalogWrapper.style.display = 'block';
		}

		if (e.target.tagName === 'LI') {
			cards.forEach((card) => {
				if (card.dataset.category === e.target.textContent) {
					card.parentNode.style.display = '';
				} else {
					card.parentNode.style.display = 'none';
				}
			});
		}
	});
}

// function execution
getData().then((data) => {
	renderCards(data);
	actionPage();
	addCart();
	toggleCart();
	toggleCheckbox();
	renderCatalogue();
});
