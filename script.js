const resultDiv = document.querySelector(".result-container");
const btn = document.querySelector(".btn-click");
const resetBtn = document.querySelector(".reset");
const btnsName = document.querySelectorAll(".name-container button");

btnsName.forEach((item) => {
	item.addEventListener("click", () => {
		btnsName.forEach((btn) => {
			btn.classList.remove("active");
			btn.style.backgroundColor = "";
		});

		item.classList.add("active");
		item.style.backgroundColor = "#da2c38";
	});
});

const resultArray = ["Karen", "Alex", "Bojan", "Eva", "Lukas", "Susana"];
const randomPerson =
	resultArray[Math.floor(Math.random() * resultArray.length)];

btn.addEventListener("click", () => {
	resultDiv.innerHTML = `
        <div class="result">${randomPerson}</div>
        `;
});

resetBtn.addEventListener("click", reset);
function reset() {
	window.location.reload();
}
