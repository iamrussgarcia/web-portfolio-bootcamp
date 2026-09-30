// =========================================================
// PORTFLIX — Russ Peter Garcia portfolio
// =========================================================

// ---------- Project data ----------
// shelf: "featured" (client & capstone) or "bootcamp"
// image: optional — projects without one get a CSS title-card poster
const projects = [
	{
		shelf: "featured",
		title: "REcipe",
		tag: "Capstone",
		flag: "Award Winner",
		image: "images/projects/recipe.webp",
		tagline: "AI-powered food inventory & recipe app — 1st Runner-Up, Best Capstone",
		description: "A mobile app that uses AI-powered image recognition to automate food inventory tracking and cut household food waste, with expiration-date notifications and an algorithmic recipe generator that suggests meals from what's actually in the pantry. Delivered end-to-end: data ingestion, backend logic, and real-time sync via Supabase. Won 1st Runner-Up, Best Capstone Project at the Research Colloquium.",
		stack: ["React Native", "Python", "AI Vision", "Supabase"]
	},
	{
		shelf: "featured",
		title: "Payroll System — World Odyssey Forwarders Inc.",
		shortTitle: "Payroll System",
		tag: "Client",
		image: "images/projects/payroll.webp",
		tagline: "Payroll automation with a live dashboard",
		description: "Designed and built a secure payroll automation system streamlining salary computation, attendance tracking, and mandatory deductions. Built a responsive Vue.js dashboard to visualize payroll data, achieving 100% accuracy in net pay and deduction calculations, with role-based authentication restricting payroll data to authorized personnel.",
		stack: ["Vue.js", "RBAC", "Dashboard"]
	},
	{
		shelf: "featured",
		title: "The Beacon",
		tag: "Freelance",
		image: "images/projects/the-beacon.webp",
		tagline: "CMS for a school publication board — freelance/client project",
		description: "Architected a content management system for a school publication board, streamlining the editorial workflow from drafting through multi-stage review to final approval. Implemented role-based access control (RBAC) across writer, editor, and admin roles for secure, structured data handling.",
		stack: ["CMS", "RBAC", "Workflow"]
	},
	{
		shelf: "featured",
		title: "Paradise Resort — Booking & Management Platform",
		shortTitle: "Paradise Resort",
		tag: "Full Stack",
		image: "images/projects/paradise.webp",
		tagline: "A full-stack resort reservation system with real-time availability, business-rule-aware booking, and a complete admin back office.",
		description: "Laravel + React (Inertia) booking system with a multi-type reservation engine (time-slot conflict checks, capacity limits, blackout windows), package/discount management, and a role-gated admin dashboard with soft-delete/archive workflows and activity logging.",
		stack: ["Laravel", "React", "Inertia"]
	},
	{
		shelf: "featured",
		title: "Steve Hummer Homes LLC",
		tag: "Client",
		image: "images/projects/stevesummer.webp",
		tagline: "A modern, conversion-focused marketing site for a real estate professional, built on Next.js 16 and React 19.",
		description: "A modern, conversion-focused marketing site for a real estate professional, built on Next.js 16 and React 19. Features a custom CMS for managing property listings, integrated with Supabase for real-time data updates and optimized for SEO and performance.",
		stack: ["Next.js 16", "React 19", "Supabase"]
	},
	{
		shelf: "featured",
		title: "Pawrfect Home",
		tag: "Full Stack",
		image: "images/projects/pawrfect.webp",
		tagline: "Pet adoption platform connecting shelters and adopters",
		description: "A full-stack pet adoption platform connecting animal shelters with prospective adopters, improving match rates through better UI/UX and search filtering.",
		stack: ["Full Stack", "UI/UX", "Search"]
	},
	{
		shelf: "featured",
		title: "Spendly",
		tag: "PWA",
		flag: "In Development",
		image: "images/projects/spendly.webp",
		tagline: "Offline-first PWA for expense tracking and budget insights",
		description: "A Progressive Web App for tracking personal expenses, managing budgets, and surfacing spending insights. Built offline-first with a service worker and IndexedDB queue, so transactions can be logged with no connection and sync automatically once back online. Currently in active development.",
		stack: ["PWA", "Service Worker", "IndexedDB"]
	},
	{
		shelf: "bootcamp",
		title: "E-commerce API Documentation",
		image: "images/projects/ecommerce-api.webp",
		tag: "API Docs",
		tagline: "Dynamic E-Commerce Workflow Management",
		description: "Dynamic E Commerce Workflow Management. The system features dynamic routes for order processing, real time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management. Documented Backend API published publicly using Postman.",
		stack: ["REST API", "Auth", "Postman"]
	},
	{
		shelf: "bootcamp",
		title: "Course Booking API Documentation",
		image: "images/projects/course-booking-api.webp",
		tag: "API Docs",
		tagline: "RESTful API for managing course enrollments",
		description: "RESTful API for managing course enrollments, featuring user registration, authentication, and retrieval of user details. Supports course creation, updates, archiving activation, and student enrollment. Publicly documented using Postman.",
		stack: ["REST API", "Auth", "Postman"]
	},
	{
		shelf: "bootcamp",
		title: "Course Booking App",
		image: "images/projects/course-booking-app.webp",
		tag: "MERN",
		tagline: "A MERN-stack course enrollment system",
		description: "A MERN-stack course enrollment system featuring user registration, authentication, and profile management. Authenticated users can create, update, archive, and activate courses. The platform also allows users to browse available courses and enroll seamlessly.",
		stack: ["MongoDB", "Express", "React", "Node.js"]
	},
	{
		shelf: "bootcamp",
		title: "E-commerce App",
		image: "images/projects/ecommerce-app.webp",
		tag: "MERN",
		tagline: "MERN E-Commerce Platform",
		description: "MERN E-Commerce Platform. The platform features dynamic product catalog with filtering and sorting, real-time search, seamless cart updates, secure checkout, and a comprehensive admin dashboard with real-time analytics and user management capabilities.",
		stack: ["MongoDB", "Express", "React", "Node.js"]
	},
	{
		shelf: "bootcamp",
		title: "Airline Booking System Mockup",
		image: "images/projects/airline-mockup.webp",
		tag: "Side Project",
		tagline: "Conceptual design for flight search, seat selection, and booking confirmation",
		description: "Side Project: Conceptual design showcasing an intuitive UI for flight search, seat selection, and booking confirmation, focusing on user experience and workflow efficiency.",
		stack: ["UI/UX", "Mockup"]
	},
	{
		shelf: "bootcamp",
		title: "Airline Booking System Prototype",
		image: "images/projects/airline-prototype.webp",
		tag: "Side Project",
		tagline: "Interactive prototype simulating end-to-end airline booking",
		description: "Side Project: Interactive prototype simulating end-to-end airline booking functionalities, including flight search, reservation, payment processing, and real-time ticket management.",
		stack: ["Prototype", "Booking Flow"]
	},
	{
		shelf: "bootcamp",
		title: "Short Courses Capstone",
		image: "images/projects/short-courses-capstone.webp",
		tag: "Capstone",
		tagline: "Short courses capstone project",
		description: "Placeholder for your Short courses capstone project.",
		stack: ["Capstone"]
	}
];

const shelfLabels = {
	featured: "Client & Capstone",
	bootcamp: "Bootcamp Release"
};

// ---------- Helpers ----------
function el(tag, className, text) {
	const node = document.createElement(tag);
	if (className) node.className = className;
	if (text !== undefined) node.textContent = text;
	return node;
}

function buildPoster(project, rank) {
	const poster = el("div", "poster");

	if (project.image) {
		const img = el("img");
		img.src = project.image;
		img.alt = project.title;
		img.loading = "lazy";
		img.width = 640;
		img.height = 360;
		poster.appendChild(img);
	} else {
		poster.classList.add("poster-title-card");
		poster.appendChild(el("p", "poster-title", project.shortTitle || project.title));
	}

	poster.appendChild(el("span", "n-badge", "N"));

	if (project.flag) {
		const flag = el("span", "poster-flag", project.flag);
		if (project.flag === "Award Winner") flag.classList.add("flag-award");
		poster.appendChild(flag);
	}

	if (rank) {
		poster.appendChild(el("span", "rank", String(rank)));
	}

	return poster;
}

function buildStack(stack) {
	const list = el("ul", "stack-list");
	stack.forEach(function (item) {
		list.appendChild(el("li", "", item));
	});
	return list;
}

function buildCard(project, index) {
	const card = el("button", "project-card");
	card.type = "button";
	card.dataset.index = String(index);
	card.setAttribute("aria-label", "View details for " + project.title);

	const rank = project.shelf === "featured" ? projects.filter(function (p, i) {
		return p.shelf === "featured" && i <= index;
	}).length : null;

	card.appendChild(buildPoster(project, rank));

	const body = el("div", "card-body-p");
	body.appendChild(el("span", "card-genre", project.tag));
	body.appendChild(el("h3", "card-title", project.shortTitle || project.title));
	body.appendChild(el("p", "card-tagline", project.tagline));

	const foot = el("div", "card-foot");
	foot.appendChild(buildStack(project.stack));
	const play = el("span", "play-dot");
	play.appendChild(el("i", "bi bi-play-fill"));
	foot.appendChild(play);
	body.appendChild(foot);

	card.appendChild(body);
	return card;
}

// ---------- Shelves ----------
function renderShelves() {
	document.querySelectorAll("[data-shelf-track]").forEach(function (track) {
		const shelf = track.dataset.shelfTrack;
		projects.forEach(function (project, index) {
			if (project.shelf === shelf) {
				track.appendChild(buildCard(project, index));
			}
		});
		track.addEventListener("scroll", function () {
			updateArrows(shelf);
		}, { passive: true });
		updateArrows(shelf);
	});
}

function updateArrows(shelf) {
	const track = document.querySelector('[data-shelf-track="' + shelf + '"]');
	if (!track) return;
	const maxScroll = track.scrollWidth - track.clientWidth - 2;
	const atStart = track.scrollLeft <= 2;
	const atEnd = track.scrollLeft >= maxScroll;

	document.querySelectorAll('.shelf-btn[data-shelf="' + shelf + '"]').forEach(function (btn) {
		const dir = Number(btn.dataset.dir);
		btn.disabled = dir < 0 ? atStart : atEnd;
	});

	// edge fades: only show a fade on a side that still has more cards
	track.classList.toggle("fade-left", !atStart);
	track.classList.toggle("fade-right", !atEnd);
}

function initShelfArrows() {
	document.querySelectorAll(".shelf-btn").forEach(function (btn) {
		btn.addEventListener("click", function () {
			const track = document.querySelector('[data-shelf-track="' + btn.dataset.shelf + '"]');
			track.scrollBy({ left: Number(btn.dataset.dir) * track.clientWidth * 0.8, behavior: "smooth" });
		});
	});

	window.addEventListener("resize", function () {
		updateArrows("featured");
		updateArrows("bootcamp");
	});
}

// ---------- Project modal ----------
function initModal() {
	const modalEl = document.getElementById("projectModal");
	const modal = new bootstrap.Modal(modalEl);

	const poster = document.getElementById("modalPoster");
	const image = document.getElementById("modalImage");
	const posterTitle = document.getElementById("modalPosterTitle");

	document.getElementById("projects").addEventListener("click", function (event) {
		const card = event.target.closest(".project-card");
		if (!card) return;

		const project = projects[Number(card.dataset.index)];

		if (project.image) {
			image.src = project.image;
			image.alt = project.title;
			image.classList.remove("d-none");
			posterTitle.classList.add("d-none");
			poster.classList.remove("poster-title-card");
		} else {
			image.classList.add("d-none");
			posterTitle.textContent = project.shortTitle || project.title;
			posterTitle.classList.remove("d-none");
			poster.classList.add("poster-title-card");
		}

		document.getElementById("modalTag").textContent = project.tag;
		document.getElementById("modalShelf").textContent = shelfLabels[project.shelf];
		document.getElementById("projectModalTitle").textContent = project.title;
		document.getElementById("modalTagline").textContent = project.tagline;
		document.getElementById("modalDesc").textContent = project.description;

		const stackHolder = document.getElementById("modalStack");
		stackHolder.replaceChildren.apply(stackHolder, Array.from(buildStack(project.stack).children));

		modal.show();
	});
}

// ---------- Navbar: scroll state + active section ----------
function initNav() {
	const nav = document.getElementById("siteNav");

	function onScroll() {
		nav.classList.toggle("scrolled", window.scrollY > 40);
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	const links = document.querySelectorAll("[data-section]");
	const observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (!entry.isIntersecting) return;
			const id = entry.target.id;
			links.forEach(function (link) {
				link.classList.toggle("active", link.dataset.section === id);
			});
		});
	}, { rootMargin: "-45% 0px -50% 0px" });

	["landing", "projects", "tools", "contact"].forEach(function (id) {
		const section = document.getElementById(id);
		if (section) observer.observe(section);
	});
}

// ---------- Tools filter ----------
function initToolFilter() {
	const chips = document.querySelectorAll(".filter-chip");
	const groups = document.querySelectorAll(".tool-group");

	chips.forEach(function (chip) {
		chip.addEventListener("click", function () {
			const filter = chip.dataset.filter;

			chips.forEach(function (c) {
				c.classList.toggle("active", c === chip);
			});

			groups.forEach(function (group) {
				const show = filter === "all" || group.dataset.category === filter;
				group.classList.toggle("d-none", !show);
			});
		});
	});
}

// ---------- In-page search ----------
function initSearch() {
	const wrap = document.getElementById("navSearch");
	const toggle = document.getElementById("searchToggle");
	const input = document.getElementById("searchInput");
	const clear = document.getElementById("searchClear");
	const results = document.getElementById("searchResults");

	// Build one searchable index from the sections, project data, and tool tiles
	const index = [];

	[
		{ id: "landing", title: "Home", sub: "Russ Peter Garcia — Full Stack Web Developer & Software Engineer", icon: "bi-house-door", keywords: "about hero intro russ peter garcia full stack web developer software engineer" },
		{ id: "projects", title: "Projects", sub: "Client, capstone & bootcamp releases", icon: "bi-collection-play", keywords: "work portfolio shelf releases" },
		{ id: "tools", title: "Tools", sub: "Languages, frameworks, databases & dev tools", icon: "bi-tools", keywords: "stack skills tech toolkit" },
		{ id: "contact", title: "Contact", sub: "Send a message or hire me", icon: "bi-envelope", keywords: "hire email message inquiry form reach" }
	].forEach(function (s) {
		index.push({ group: "Sections", title: s.title, sub: s.sub, icon: s.icon, text: s.sub + " " + s.keywords, target: s.id });
	});

	projects.forEach(function (p, i) {
		index.push({
			group: "Projects",
			title: p.shortTitle || p.title,
			sub: p.tag + " • " + shelfLabels[p.shelf],
			image: p.image,
			text: [p.title, p.tag, p.tagline, p.description, p.stack.join(" ")].join(" "),
			projectIndex: i
		});
	});

	document.querySelectorAll(".tool-tile").forEach(function (tile) {
		const name = tile.querySelector("span:last-child").textContent.trim();
		const category = tile.closest(".terminal").querySelector(".terminal-title").textContent.trim();
		const img = tile.querySelector("img");
		index.push({
			group: "Tools",
			title: name,
			sub: category,
			image: img ? img.getAttribute("src") : null,
			logo: true,
			icon: "bi-send-fill",
			text: category,
			tile: tile
		});
	});

	let matches = [];
	let active = -1;

	function score(item, terms) {
		const title = item.title.toLowerCase();
		// sub is left out on purpose: a shelf label like "Client & Capstone"
		// would otherwise make every card match "capstone"
		const haystack = (item.title + " " + item.text).toLowerCase();
		let total = 0;
		for (const term of terms) {
			if (title.startsWith(term)) total += 3;
			else if (title.includes(term)) total += 2;
			else if (haystack.includes(term)) total += 1;
			else return 0; // every term must match somewhere
		}
		return total;
	}

	function highlight(text, term) {
		const frag = document.createDocumentFragment();
		const at = term ? text.toLowerCase().indexOf(term) : -1;
		if (at < 0) {
			frag.appendChild(document.createTextNode(text));
			return frag;
		}
		frag.appendChild(document.createTextNode(text.slice(0, at)));
		frag.appendChild(el("mark", "", text.slice(at, at + term.length)));
		frag.appendChild(document.createTextNode(text.slice(at + term.length)));
		return frag;
	}

	function render() {
		const query = input.value.trim().toLowerCase();
		results.replaceChildren();
		active = -1;
		input.removeAttribute("aria-activedescendant");

		if (!query) {
			matches = [];
			setExpanded(false);
			return;
		}

		const terms = query.split(/\s+/);
		const scored = index
			.map(function (item) { return { item: item, s: score(item, terms) }; })
			.filter(function (m) { return m.s > 0; })
			.sort(function (a, b) { return b.s - a.s; });

		if (!scored.length) {
			matches = [];
			results.appendChild(el("li", "search-empty", 'No matches for "' + input.value.trim() + '"'));
			setExpanded(true);
			return;
		}

		// groups appear in order of their best match (so "react" lists the
		// React tool before projects that merely use React)
		const groupOrder = [];
		scored.forEach(function (m) {
			if (groupOrder.indexOf(m.item.group) < 0) groupOrder.push(m.item.group);
		});
		matches = scored.map(function (m) { return m.item; });

		const ordered = [];
		groupOrder.forEach(function (group) {
			const inGroup = matches.filter(function (m) { return m.group === group; }).slice(0, 6);
			if (!inGroup.length) return;
			results.appendChild(el("li", "search-group", group)).setAttribute("role", "presentation");
			inGroup.forEach(function (item) {
				const li = el("li", "search-item");
				li.id = "search-opt-" + ordered.length;
				li.setAttribute("role", "option");
				li.dataset.pos = String(ordered.length);

				if (item.image) {
					const img = el("img", "search-thumb" + (item.logo ? " is-logo" : ""));
					img.src = item.image;
					img.alt = "";
					li.appendChild(img);
				} else {
					const icon = el("span", "search-icon");
					icon.appendChild(el("i", "bi " + item.icon));
					li.appendChild(icon);
				}

				const text = el("span", "search-text");
				const title = el("span", "search-title");
				title.appendChild(highlight(item.title, terms[0]));
				text.appendChild(title);
				text.appendChild(el("span", "search-sub", item.sub));
				li.appendChild(text);

				results.appendChild(li);
				ordered.push(item);
			});
		});
		matches = ordered;
		setExpanded(true);
	}

	function setExpanded(show) {
		results.classList.toggle("show", show);
		input.setAttribute("aria-expanded", String(show));
	}

	function setActive(pos) {
		const items = results.querySelectorAll(".search-item");
		if (!items.length) return;
		active = (pos + items.length) % items.length;
		items.forEach(function (li, i) {
			li.classList.toggle("active", i === active);
			li.setAttribute("aria-selected", String(i === active));
		});
		items[active].scrollIntoView({ block: "nearest" });
		input.setAttribute("aria-activedescendant", items[active].id);
	}

	function pulse(node) {
		node.classList.remove("search-hit");
		void node.offsetWidth; // restart the animation
		node.classList.add("search-hit");
		node.addEventListener("animationend", function () {
			node.classList.remove("search-hit");
		}, { once: true });
	}

	function go(item) {
		close();

		if (item.target) {
			document.getElementById(item.target).scrollIntoView({ behavior: "smooth" });
			return;
		}

		if (item.projectIndex !== undefined) {
			const card = document.querySelector('.project-card[data-index="' + item.projectIndex + '"]');
			card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
			pulse(card);
			return;
		}

		if (item.tile) {
			// make sure the tool's category isn't hidden by the filter chips
			const allChip = document.querySelector('.filter-chip[data-filter="all"]');
			if (allChip && !allChip.classList.contains("active")) allChip.click();
			item.tile.scrollIntoView({ behavior: "smooth", block: "center" });
			pulse(item.tile);
		}
	}

	function open() {
		wrap.classList.add("open");
		toggle.setAttribute("aria-expanded", "true");
		input.focus();
		render();
	}

	function close() {
		wrap.classList.remove("open");
		toggle.setAttribute("aria-expanded", "false");
		input.value = "";
		render();
		input.blur();
	}

	toggle.addEventListener("click", function () {
		if (wrap.classList.contains("open")) input.focus();
		else open();
	});

	clear.addEventListener("click", close);
	input.addEventListener("input", render);

	input.addEventListener("keydown", function (event) {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			setActive(active + 1);
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			setActive(active - 1);
		} else if (event.key === "Enter") {
			event.preventDefault();
			if (matches.length) go(matches[Math.max(active, 0)]);
		} else if (event.key === "Escape") {
			close();
			toggle.focus();
		}
	});

	results.addEventListener("mousedown", function (event) {
		// mousedown (not click) so it fires before the input loses focus
		const li = event.target.closest(".search-item");
		if (!li) return;
		event.preventDefault();
		go(matches[Number(li.dataset.pos)]);
	});

	// click anywhere outside the search box closes it
	document.addEventListener("click", function (event) {
		if (!wrap.contains(event.target) && wrap.classList.contains("open")) close();
	});

	// "/" opens search from anywhere on the page, like most sites
	document.addEventListener("keydown", function (event) {
		const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
		if (event.key === "/" && !typing) {
			event.preventDefault();
			open();
		}
	});
}

// ---------- Contact form ----------
function initContactForm() {
	const form = document.getElementById("contactForm");
	const email = document.getElementById("cfEmail");
	const success = document.getElementById("formSuccess");
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	email.addEventListener("input", function () {
		email.setCustomValidity(emailPattern.test(email.value.trim()) ? "" : "Invalid email");
	});

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		email.setCustomValidity(emailPattern.test(email.value.trim()) ? "" : "Invalid email");
		success.classList.add("d-none");

		if (!form.checkValidity()) {
			form.classList.add("was-validated");
			const firstInvalid = form.querySelector(":invalid");
			if (firstInvalid) firstInvalid.focus();
			return;
		}

		// No backend yet — simulate the transmission
		const button = form.querySelector(".btn-transmit");
		button.disabled = true;

		setTimeout(function () {
			form.reset();
			form.classList.remove("was-validated");
			button.disabled = false;
			success.classList.remove("d-none");
		}, 700);
	});
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
	renderShelves();
	initShelfArrows();
	initModal();
	initNav();
	initToolFilter();
	initSearch();
	initContactForm();
});
