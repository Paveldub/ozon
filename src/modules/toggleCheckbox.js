export default function toggleCheckbox() {
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