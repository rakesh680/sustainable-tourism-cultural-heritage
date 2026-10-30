// Sustainable Tourism Platform JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Welcome Message
    console.log("Welcome to HeritageExplore!");

    // Smooth Navigation
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });

    // Destination Card Interaction
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            const destination = card.querySelector("h3").textContent;
            alert("You are exploring " + destination + "! Discover its culture and heritage.");
        });
    });

    // Sustainability Awareness
    const features = document.querySelectorAll(".features div");

    features.forEach(function (feature) {
        feature.addEventListener("click", function () {
            const title = feature.querySelector("h3").textContent;
            alert("Learn more about: " + title);
        });
    });

    // Footer Year
    const footer = document.querySelector("footer p:last-child");

    if (footer) {
        footer.textContent = "© " + new Date().getFullYear() +
            " Sustainable Tourism Project. All Rights Reserved.";
    }

});