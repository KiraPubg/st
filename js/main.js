const body = document.querySelector("body");
const inputArea = document.querySelector(".calculation__area-input");
const inputAreaValue = document.querySelector(".calculation__area-value");
const selectHeader = document.querySelectorAll(".calculation__select");
const selectImg = document.querySelector(".calculation__select-img");
const selectBody = document.querySelector(".calculation__select-body");
const selectItem = document.querySelectorAll(".calculation__select-item");
const selectPlacehold = document.querySelector(".calculation__select-placeholder");
const headerMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");
const headerContacts = document.querySelector(".header__contacts");
const headerOpen = document.querySelector(".header__menu-open");
const headerClose = document.querySelector(".header__menu-close");
const mask = document.querySelector(".mask");

inputArea.oninput = (() => {
	let inpAreaValue = inputArea.value;
	inputAreaValue.textContent = inpAreaValue + "м²"
	inputAreaValue.style.left = (inpAreaValue / 2) + "%";
	inputAreaValue.style.transform = "translateX(-30%)"
	inputAreaValue.classList.add("show")
	if (inpAreaValue >= 70) {
		inputAreaValue.style.transform = "translateX(-50%)"
	}
})

selectHeader.forEach(el => {
	el.addEventListener("click", function () {
		this.parentElement.classList.toggle("active")
		selectImg.classList.toggle("active")
		selectBody.classList.toggle("active")
	})
});

selectItem.forEach(e => {
	e.addEventListener("click", function () {
		let text = e.innerText;
		selectPlacehold.innerText = text
		selectBody.classList.toggle("active")
	})
})
$('.works__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	dotsClass: "works__slider-dots",
	nextArrow: '<button type="button" class="works__slider-arrows works__slider-next"><img src="./img/arr-right.svg"></button>',
	prevArrow: '<button type="button" class="works__slider-arrows works__slider-prev"><img src="./img/arr-left.svg"></button>',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
			}
		},
	]
});
const dotsItem = document.querySelectorAll(".works__slider-dots li");
const dots = document.querySelector('.works__slider-dots');
const rightArr = document.querySelector(".works__slider-next");
let dotL = 0;
let dotLCopy = 0;
dotsItem.forEach((el, idx, arr) => {
	dotL = arr.length;
	dotLCopy = arr.length;
})
dotLCopy -= 1;
dotL = dotL * 12 + (14 * dotLCopy);
dots.style.width = dotL + "px";
rightArr.style.left = (dotL + 60) + "px";

headerMenu.addEventListener("click", function () {
	headerOpen.classList.toggle("active")
	headerClose.classList.toggle("active")
	headerNav.classList.toggle("active")
	headerContacts.classList.toggle("active")
	body.classList.toggle("no-scroll")
	mask.classList.toggle("active")
})