// ==========================================
// VANILLA JAVASCRIPT (Module 4) - 3 Features
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    
    // JS Feature 1: Dynamic content update using DOM manipulation
    const greetingElement = document.getElementById("dynamic-greeting");
    const currentHour = new Date().getHours();
    let greetingText = "Good Evening!";
    
    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    }
    greetingElement.textContent = `${greetingText} Welcome to my interactive portfolio.`;

    // JS Feature 2: Show/Hide Toggle for extra projects
    const toggleBtn = document.getElementById("toggle-projects-btn");
    const extraProjects = document.getElementById("extra-projects");

    toggleBtn.addEventListener("click", function() {
        if (extraProjects.style.display === "none") {
            extraProjects.style.display = "block";
            toggleBtn.textContent = "View Less Projects";
        } else {
            extraProjects.style.display = "none";
            toggleBtn.textContent = "View More Projects";
        }
    });

    // JS Feature 3: Basic validation with clear feedback for Contact Form
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate Name
        if (name === "") {
            document.getElementById("name-error").textContent = "Name is required.";
            isValid = false;
        } else {
            document.getElementById("name-error").textContent = "";
        }

        // Validate Email
        if (email === "" || !email.includes("@")) {
            document.getElementById("email-error").textContent = "A valid email is required.";
            isValid = false;
        } else {
            document.getElementById("email-error").textContent = "";
        }

        // Validate Message
        if (message === "") {
            document.getElementById("message-error").textContent = "Message is required.";
            isValid = false;
        } else {
            document.getElementById("message-error").textContent = "";
        }

        // Output success feedback
        if (isValid) {
            document.getElementById("form-success-msg").style.display = "block";
            contactForm.reset(); 
            setTimeout(() => {
                document.getElementById("form-success-msg").style.display = "none";
            }, 4000);
        }
    });
});

// ==========================================
// jQuery (Module 4.1) - 2 Interactions
// ==========================================

$(document).ready(function () {
    
    // jQuery Feature 1: Smooth scrolling for navigation anchors using on('click') and animate()
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600);
        }
    });

    // jQuery Feature 2: Dark mode toggle using toggleClass() and text() updates (Bonus Integration)
    $("#theme-toggle").on('click', function() {
        // Toggle the dark-mode class on the body
        $("body").toggleClass("dark-mode");
        
        // Update the button text depending on the current mode
        if ($("body").hasClass("dark-mode")) {
            $(this).text("Toggle Light Mode");
        } else {
            $(this).text("Toggle Dark Mode");
        }
    });
});