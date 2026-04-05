// =====================================================================
// MODULE 4: VANILLA JAVASCRIPT REQUIREMENTS
// =====================================================================
document.addEventListener("DOMContentLoaded", function() {

    // 1. Prompt-based Personalization & Dynamic Content Update
    const welcomeHeader = document.getElementById("welcome-message");
    setTimeout(() => {
        const visitorName = prompt("Welcome to my portfolio! What is your name?");
        if (visitorName && visitorName.trim() !== "") {
            welcomeHeader.textContent = `Welcome to my website, ${visitorName}!`;
        }
    }, 500);

    // 2. Show/Hide or Toggle a Section ("View More" Projects)
    const toggleBtn = document.getElementById("toggle-projects-btn");
    const extraProjects = document.getElementById("extra-projects");
    let projectsHidden = true;

    if (toggleBtn && extraProjects) {
        toggleBtn.addEventListener("click", function() {
            if (projectsHidden) {
                extraProjects.style.display = "block";
                toggleBtn.textContent = "Show Less";
            } else {
                extraProjects.style.display = "none";
                toggleBtn.textContent = "View More Projects";
            }
            projectsHidden = !projectsHidden;
        });
    }

    // 3. Basic Validation with Clear Feedback (Contact Form)
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formFeedback.textContent = "Error: Please fill out all required fields.";
                formFeedback.style.color = "#e74c3c"; 
            } else if (!email.includes("@") || !email.includes(".")) {
                formFeedback.textContent = "Error: Please enter a valid email address.";
                formFeedback.style.color = "#e74c3c";
            } else {
                formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
                formFeedback.style.color = "#27ae60"; 
                contactForm.reset();
            }
        });
    }
});


// =====================================================================
// MODULE 4.1: JQUERY REQUIREMENTS
// =====================================================================
$(document).ready(function () {

    // jQuery Interaction 1: Toggle Class & Change Text
    // Uses: .on('click'), .toggleClass(), .text()
    $('#highlight-skills-btn').on('click', function() {
        // Toggle a class on the strong tags inside the skills list
        $('.skill-title').toggleClass('highlight-active');
        
        // Change the button text based on current state
        if ($(this).text() === 'Highlight Core Skills') {
            $(this).text('Remove Highlight');
        } else {
            $(this).text('Highlight Core Skills');
        }
    });

    // jQuery Interaction 2: Create, Append, Hide, Show, and Attr
    // Uses: .on('click'), .append(), .hide(), .show(), .attr()
    $('#fun-fact-btn').on('click', function() {
        // Append a new paragraph element to the container, initially hidden
        $('#fun-fact-container').append('<p class="fact-text" style="display:none; color: #3498db; font-style: italic; margin-top: 10px; font-weight: bold;">Fun Fact: I built this responsive portfolio from scratch using HTML, CSS, JavaScript, and jQuery!</p>');
        
        // Use a jQuery animation to show the newly appended item
        $('.fact-text').show(600);
        
        // Hide the button and disable it using attr() so it can't be clicked again
        $(this).attr('disabled', 'disabled').hide(400);
    });

});