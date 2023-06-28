const tabsBtns = document.querySelectorAll(".tabs__nav button");
//console.log(tabsBtns)
const tabsItems = document.querySelectorAll(".tabs__item");
//console.log(tabsItems)
function hideTabs() {
	tabsItems.forEach(tab => tab.classList.add("hide"));
	tabsBtns.forEach(Btn => Btn.classList.remove("active"));
}	

function showTab(index) {
	tabsItems[index].classList.remove("hide");
	tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
	hideTabs();
	showTab(index);
}))

const anchors = document.querySelectorAll(".header__nav a");
console.log(anchors)
anchors.forEach(anc => {
	anc.addEventListener("click", function(event){
		event.preventDefault();

		const id = anc.getAttribute("href");

		const element = document.querySelector(id);

		window.scroll({
			top: element.offsetTop - 74,
			behavior: 'smooth'

		});
	});
});