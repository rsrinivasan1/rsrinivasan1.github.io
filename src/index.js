updateDimensions = () => {
	let navbar = document.querySelector(".navbar");
	let button = document.querySelector("#dropdown-button");
	let navbarHeight =
		button.offsetHeight == 0
			? navbar.offsetHeight
			: Math.min(navbar.offsetHeight, button.offsetHeight);
	let root = document.querySelector(":root");
	root.style.setProperty("--navbarHeight", navbarHeight + "px");
	console.log(navbarHeight);
	let vid1 = document.querySelector(".project1");
	let vid2 = document.querySelector(".project2");
	let vid3 = document.querySelector(".project3");
	let vid1Width = vid1.offsetWidth;
	let vid2Width = vid2.offsetWidth;
	let vid3Width = vid3.offsetWidth;
	root.style.setProperty("--vid1Width", vid1Width + "px");
	root.style.setProperty("--vid2Width", vid2Width + "px");
	root.style.setProperty("--vid3Width", vid3Width + "px");
	console.log("width: " + vid2Width);
	console.log("height: " + vid2.offsetHeight);
};

window.onload = () => {
	updateDimensions();
	let options = {
		strings: ["Hi, my name is Raghav."],
		typeSpeed: 40,
		backSpeed: 40,
		showCursor: false,
		startDelay: 1000,
		onComplete: () => {
			setTimeout(() => {
				let subtext = new Typed("#subtext", options2);
			}, 500);
		},
	};
	let options2 = {
		strings: [
			"I'm a CS Specialist at UofT.",
			"I'm an international student.",
			"I'm a software developer.",
			"I'm a typeracer addict.",
			"I'm a casual gamer.",
			"I'm a sporadic gymrat.",
			"I'm excited for the future!",
		],
		typeSpeed: 40,
		backSpeed: 40,
		showCursor: false,
	};

	let intro = new Typed("#header", options);

	const dropdown = document.getElementById("dropdown-button");
	const dropdownMenu = document.getElementById("navbar-default");

	let menuOptionsArray = document.getElementsByClassName("menu-option");
	let currentMenuOption = menuOptionsArray[0];

	for (const elem of menuOptionsArray) {
		elem.addEventListener("click", () => {
			currentMenuOption.classList.remove("text-orange-300");
			currentMenuOption.classList.add("text-gray-400");
			currentMenuOption.classList.add("hover:text-white");
			currentMenuOption.classList.remove("hover:text-orange-300");

			currentMenuOption = elem;

			currentMenuOption.classList.add("text-orange-300");
			currentMenuOption.classList.remove("text-gray-400");
			currentMenuOption.classList.remove("hover:text-white");
			currentMenuOption.classList.add("hover:text-orange-300");
		});
	}

	dropdown.addEventListener("click", () => {
		dropdownToggle();
	});

	dropdownToggle = () => {
		dropdownMenu.classList.toggle("hidden");
	};

	onresize = () => {
		updateDimensions();
	};
};
