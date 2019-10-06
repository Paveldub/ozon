export default function getData() {
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