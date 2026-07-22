const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const traceMessage = document.querySelector("#trace-message");
const consoleState = document.querySelector("#console-state");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
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

document.querySelector(".contact-form")?.addEventListener("submit", async (event) => {
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
      status.textContent = "Thanks. Your enquiry was submitted. If this is the first test, check forsubs1289@gmail.com for a FormSubmit activation email, including spam.";
      status.classList.add("is-success");
    }
    button.textContent = "Sent";
  } catch (error) {
    if (status) {
      status.textContent = "Something went wrong. Please email forsubs1289@gmail.com directly.";
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
