const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const traceMessage = document.querySelector("#trace-message");
const consoleState = document.querySelector("#console-state");
const hero = document.querySelector(".hero");
const productsToggle = document.querySelector(".products-toggle");
const productsNav = document.querySelector(".nav-products");
const crmFilterButtons = document.querySelectorAll("[data-crm-filter]");
const typeFilterButtons = document.querySelectorAll("[data-type-filter]");
const freeFilterButton = document.querySelector("[data-free-filter]");
const productCards = document.querySelectorAll("[data-crm]");
const filterEmpty = document.querySelector(".filter-empty");
const productSections = document.querySelectorAll("[data-product-section]");

if (hero) {
  const heroImage = new Image();
  const revealHero = () => hero.classList.add("hero-ready");
  const decodeHero = () => {
    if (typeof heroImage.decode === "function") {
      heroImage.decode().then(revealHero).catch(revealHero);
    } else {
      revealHero();
    }
  };

  heroImage.src = "assets/images/tapiobridge-hero.webp";

  if (heroImage.complete) {
    decodeHero();
  } else {
    heroImage.addEventListener("load", decodeHero, { once: true });
    heroImage.addEventListener("error", revealHero, { once: true });
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (productsToggle && productsNav) {
  const closeProducts = () => {
    productsNav.classList.remove("open");
    productsToggle.setAttribute("aria-expanded", "false");
  };

  productsToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = productsNav.classList.toggle("open");
    productsToggle.setAttribute("aria-expanded", String(isOpen));
  });

  productsNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) closeProducts();
  });

  document.addEventListener("click", (event) => {
    if (!productsNav.contains(event.target)) closeProducts();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProducts();
      productsToggle.focus();
    }
  });
}

if (crmFilterButtons.length && typeFilterButtons.length && productCards.length) {
  let selectedCrm = "all";
  let selectedType = "all";
  let freeOnly = false;

  const applyProductFilters = () => {
    let visibleCount = 0;

    productCards.forEach((card) => {
      const matchesCrm = selectedCrm === "all" || card.dataset.crm === selectedCrm;
      const matchesType = selectedType === "all" || card.dataset.appType === selectedType;
      const matchesPrice = !freeOnly || card.dataset.free === "true";
      const shouldShow = matchesCrm && matchesType && matchesPrice;
      card.classList.toggle("is-hidden", !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    productSections.forEach((section) => {
      const hasVisibleCards = Array.from(section.querySelectorAll("[data-crm]")).some(
        (card) => !card.classList.contains("is-hidden")
      );
      section.classList.toggle("is-hidden", !hasVisibleCards);
    });

    filterEmpty?.classList.toggle("is-hidden", visibleCount !== 0);
  };

  const activateExclusiveFilter = (buttons, selectedButton) => {
    buttons.forEach((button) => {
      const isActive = button === selectedButton;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  crmFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedCrm = button.dataset.crmFilter;
      activateExclusiveFilter(crmFilterButtons, button);
      applyProductFilters();
    });
  });

  typeFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedType = button.dataset.typeFilter;
      activateExclusiveFilter(typeFilterButtons, button);
      applyProductFilters();
    });
  });

  freeFilterButton?.addEventListener("click", () => {
    freeOnly = !freeOnly;
    freeFilterButton.classList.toggle("active", freeOnly);
    freeFilterButton.setAttribute("aria-pressed", String(freeOnly));
    applyProductFilters();
  });

  applyProductFilters();
}

if (traceMessage && consoleState) {
  const states = [
    ["listening", "understand workflow"],
    ["checking access", "prepare the right action"],
    ["retrieving", "bring support into view"],
    ["ready", "continue in existing tool"]
  ];
  let stateIndex = 0;

  window.setInterval(() => {
    stateIndex = (stateIndex + 1) % states.length;
    const [state, message] = states[stateIndex];

    traceMessage.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 380, easing: "ease-out" }
    );

    consoleState.textContent = state;
    traceMessage.textContent = message;
  }, 2400);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

document.querySelector(".contact-form, .contact-form-new")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");
  const status = form.querySelector(".form-status");

  if (!button) return;

  const originalText = button.textContent;
  button.textContent = "Sending...";
  button.disabled = true;
  if (status) {
    status.textContent = "";
    status.classList.remove("is-error", "is-success");
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: new FormData(form)
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    form.reset();
    if (status) {
      status.textContent = "Thanks. Your enquiry has been submitted.";
      status.classList.add("is-success");
    }
    button.textContent = "Sent";
  } catch (error) {
    if (status) {
      status.textContent = "Something went wrong. Please email contact@tapiobridge.com directly.";
      status.classList.add("is-error");
    }
    button.textContent = originalText;
    button.disabled = false;
    return;
  }

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2600);
});
