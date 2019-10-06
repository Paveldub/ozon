export default function toggleCart() {
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