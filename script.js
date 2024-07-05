document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburgerLines = document.querySelector(".hamburger-lines");
    const menuItems = document.querySelector(".menu-items");

    hamburgerLines.addEventListener("click", () => {
        menuItems.classList.toggle("active");
    });

    // Form validation
    const form = document.querySelector(".form-container");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");
    const submitButton = form.querySelector(".btn-primary");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        // Basic validation
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "murali" || email === "murali@gmail" || message === "none") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting us!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
