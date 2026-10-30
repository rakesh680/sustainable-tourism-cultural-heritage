document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const response = document.getElementById("response");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            response.textContent = "Please fill in all fields.";
            return;
        }

        response.textContent =
            "Thank you, " + name + "! Your message has been received.";

        form.reset();
    });

});