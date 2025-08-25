// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");
    function revealAboutSection() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (sectionPosition < screenPosition) {
            aboutSection.style.opacity = "1";
            aboutSection.style.transform = "translateY(0)";
        }
    }
    window.addEventListener("scroll", revealAboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("click", function () {
            const projectUrl = this.getAttribute("data-url");
            window.open(projectUrl, "_blank"); // Opens in a new tab
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-container");

    function revealContactSection() {
        const sectionPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (sectionPosition < screenPosition) {
            contactSection.style.opacity = "1";
            contactSection.style.transform = "translateY(0)";
        }
    }

    window.addEventListener("scroll", revealContactSection);

    // Form Validation + Backend Integration
   // Form Validation + Send to Backend
const form = document.getElementById("contact-form");
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();
        if (data.success) {
            alert("Message sent successfully!");  // ✅ Restored your alert
            form.reset();
        } else {
            alert("Error saving message. Please try again.");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("Server error. Please try again later.");
    }
});

});

// Show sections on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
});
