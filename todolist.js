const textBox = document.getElementById('text-box');
const addBtn = document.getElementById('add-btn');
const labels = document.querySelectorAll('.checkbox-box label');
const checkboxes = document.querySelectorAll('.checkbox-box input[type="checkbox"]');

let counter = 1;

addBtn.addEventListener('click', () => {
	if (textBox.value !== '') {
		labels[counter - 1].innerText = textBox.value;
		textBox.value = '';
		counter++;
		if (counter > 5) {
			counter = 1;
		}
	}
});

// checkboxes.forEach((checkbox) => {
// 	checkbox.addEventListener('change', () => {
// 		if (checkbox.checked) {
// 			console.log(`Checkbox ${(link unavailable)} is checked`);
// 		} else {
// 			console.log(`Checkbox ${(link unavailable)} is unchecked`);
// 		}
// 	});
// });
