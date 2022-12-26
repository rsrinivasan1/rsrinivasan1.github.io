window.onload = () => {
	let options = {
		strings: ["Hi, my name is Raghav."],
		typeSpeed: 40,
		backSpeed: 40,
		showCursor: false,
		onComplete: () => {
			setTimeout(() => {
				let subtext = new Typed("#subtext", options2);
			}, 1000);
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
			currentMenuOption.classList.remove("text-yellow-300");
			currentMenuOption.classList.add("text-gray-400");
			currentMenuOption.classList.add("md:hover:text-white");
			currentMenuOption.classList.add("hover:text-white");

			currentMenuOption = elem;

			currentMenuOption.classList.remove("text-gray-400");
			currentMenuOption.classList.add("text-yellow-300");
			currentMenuOption.classList.remove("md:hover:text-white");
			currentMenuOption.classList.remove("hover:text-white");
		});
	}

	dropdown.addEventListener("click", () => {
		dropdownToggle();
	});

	dropdownToggle = () => {
		dropdownMenu.classList.toggle("hidden");
	};

	onresize = (event) => {
		let navbar = document.querySelector(".navbar");
		let button = document.querySelector("#dropdown-button");
		let navbarHeight =
			button.offsetHeight == 0
				? navbar.offsetHeight
				: Math.min(navbar.offsetHeight, button.offsetHeight);
		let root = document.querySelector(":root");
		root.style.setProperty("--navbarHeight", navbarHeight + "px");
		console.log(navbarHeight);

		// let aboutMeContainer = document.querySelector("#about-me-container");
		// let aboutMeContainerHeight = aboutMeContainer.offsetHeight;
		// root.style.setProperty(
		// 	"--aboutMeContainerHeight",
		// 	aboutMeContainerHeight + "px"
		// );
		// let aboutMeTextBox2 = document.querySelector("#about-me-text-box-2");
		// let aboutMeTextBox2Height = aboutMeTextBox2.offsetHeight;
		// root.style.setProperty(
		// 	"--aboutMeTextBox2Height",
		// 	aboutMeTextBox2Height + "px"
		// );
	};
};
