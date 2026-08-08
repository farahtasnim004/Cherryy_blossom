// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        if (email !== "" && password !== "") {

            message.textContent = "Login successful!";

            loginForm.reset();

        }

    });

}


// ================= ADOPTION FORM =================

const adoptionForm = document.getElementById("adoptionForm");

if (adoptionForm) {

    adoptionForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("adoptionMessage");

        message.textContent =
            "Thank you! Your adoption application has been submitted.";

        adoptionForm.reset();

    });

}


// ================= DONATION FORM =================

const donationForm = document.getElementById("donationForm");

if (donationForm) {

    donationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("donationMessage");

        message.textContent =
            "Thank you for supporting rescued animals!";

        donationForm.reset();

    });

}