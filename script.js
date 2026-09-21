// ========================================
// SUPABASE CONNECTION
// ========================================

const SUPABASE_URL = "https://vhacrrzhghpuhmxeadqe.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_Jrb0RGJxQn5169v6YJ--sA_vQGMVWEh";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


// ========================================
// CODE YOUR IDENTITY
// PRAHAR
// Registration Flow
// ========================================

// ========================================
// GLOBAL VARIABLES
// ========================================

let selectedSpecialization = "";
let selectedSection = "";
let selectedGoals = [];


// ========================================
// LANDING → STEP 01
// ========================================

function startRegistration() {

    const landingPage =
        document.querySelector(".hero");

    const landingNavbar =
        document.querySelector(".navbar");

    const landingFooter =
        document.querySelector(".footer");

    const registrationSection =
        document.getElementById("registrationSection");

    landingPage.classList.add("hidden");
    landingNavbar.classList.add("hidden");
    landingFooter.classList.add("hidden");

    registrationSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// STEP 01 → LANDING
// ========================================

function backToLanding() {

    const landingPage =
        document.querySelector(".hero");

    const landingNavbar =
        document.querySelector(".navbar");

    const landingFooter =
        document.querySelector(".footer");

    const registrationSection =
        document.getElementById("registrationSection");

    registrationSection.classList.add("hidden");

    landingPage.classList.remove("hidden");
    landingNavbar.classList.remove("hidden");
    landingFooter.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// SELECT SPECIALIZATION
// ========================================

function selectSpecialization(button, specialization) {

    const allButtons =
        document.querySelectorAll(".branch-btn");

    allButtons.forEach(function (btn) {

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedSpecialization =
        specialization;

    console.log(
        "Specialization:",
        selectedSpecialization
    );

}


// ========================================
// STEP 01 → STEP 02
// ========================================

function goToStepTwo() {

    const name =
        document
            .getElementById("fullName")
            .value
            .trim();

    const studentId =
        document
            .getElementById("studentId")
            .value
            .trim();

    const section =
        document
            .getElementById("studentSection")
            .value;

    const year =
        document
            .getElementById("studentYear")
            .value;

    if (name === "") {

        alert(
            "Please enter your full name."
        );

        return;

    }

    if (studentId === "") {

        alert(
            "Please enter your college student ID."
        );

        return;

    }

    if (section === "") {

        alert(
            "Please select your section."
        );

        return;

    }

    if (selectedSpecialization === "") {

        alert(
            "Please select your specialization."
        );

        return;

    }

    if (year === "") {

        alert(
            "Please select your year."
        );

        return;

    }

    selectedSection = section;

    document
        .getElementById("registrationSection")
        .classList.add("hidden");

    document
        .getElementById("step2Section")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// STEP 02 — SELECT GOAL
// ========================================

function toggleGoal(card, goal) {

    const index =
        selectedGoals.indexOf(goal);

    if (index === -1) {

        selectedGoals.push(goal);

        card.classList.add("selected");

    } else {

        selectedGoals.splice(index, 1);

        card.classList.remove("selected");

    }

    console.log(
        "Selected Goals:",
        selectedGoals
    );

}


// ========================================
// STEP 02 → STEP 03
// ========================================

function goToStepThree() {

    const email =
        document
            .getElementById("email")
            .value
            .trim();

    const phone =
        document
            .getElementById("phone")
            .value
            .trim();

    const linkedin =
        document
            .getElementById("linkedin")
            .value
            .trim();

    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }

    if (phone === "") {

        alert(
            "Please enter your phone number."
        );

        return;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }

    const phoneDigits =
        phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {

        alert(
            "Please enter a valid phone number."
        );

        return;

    }

    document
        .getElementById("step2Section")
        .classList.add("hidden");

    document
        .getElementById("step3Section")
        .classList.remove("hidden");

    updateReview(
        email,
        phone,
        linkedin
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// UPDATE REVIEW
// ========================================

function updateReview(
    email,
    phone,
    linkedin
) {

    const name =
        document
            .getElementById("fullName")
            .value
            .trim();

    const studentId =
        document
            .getElementById("studentId")
            .value
            .trim();

    const section =
        document
            .getElementById("studentSection")
            .value;

    const year =
        document
            .getElementById("studentYear")
            .value;

    document
        .getElementById("reviewName")
        .textContent = name;

    document
        .getElementById("reviewStudentId")
        .textContent = studentId;

    document
        .getElementById("reviewSection")
        .textContent = section;

    document
        .getElementById("reviewYear")
        .textContent = year;

    document
        .getElementById("reviewSpecialization")
        .textContent =
        selectedSpecialization;

    document
        .getElementById("reviewEmail")
        .textContent = email;

    document
        .getElementById("reviewPhone")
        .textContent = phone;

    document
        .getElementById("reviewLinkedin")
        .textContent =
        linkedin === ""
            ? "Not provided"
            : linkedin;

    const reviewGoals =
        document.getElementById("reviewGoals");

    reviewGoals.innerHTML = "";

    if (selectedGoals.length === 0) {

        reviewGoals.innerHTML =
            `<span class="no-goals">
                No goals selected
            </span>`;

        return;

    }

    selectedGoals.forEach(function (goal) {

        const tag =
            document.createElement("span");

        tag.classList.add("goal-tag");

        tag.textContent = goal;

        reviewGoals.appendChild(tag);

    });

}


// ========================================
// STEP 03 → STEP 02
// ========================================

function backToStepTwo() {

    document
        .getElementById("step3Section")
        .classList.add("hidden");

    document
        .getElementById("step2Section")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// STEP 02 → STEP 01
// ========================================

function backToStepOne() {

    document
        .getElementById("step2Section")
        .classList.add("hidden");

    document
        .getElementById("registrationSection")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// GENERATE REGISTRATION ID
// ========================================

function generateRegistrationId() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let randomPart = "";

    for (let i = 0; i < 5; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        randomPart +=
            characters[randomIndex];

    }

    return "CYI-26-" + randomPart;

}


// ========================================
// REGISTER USER
// ========================================

// ========================================
// REGISTER USER + SAVE TO SUPABASE
// ========================================

async function registerUser() {

    const name =
        document
            .getElementById("fullName")
            .value
            .trim();

    const studentId =
        document
            .getElementById("studentId")
            .value
            .trim();

    const section =
        document
            .getElementById("studentSection")
            .value;

    const year =
        document
            .getElementById("studentYear")
            .value;

    const email =
        document
            .getElementById("email")
            .value
            .trim();

    const phone =
        document
            .getElementById("phone")
            .value
            .trim();

    const linkedin =
        document
            .getElementById("linkedin")
            .value
            .trim();

    // Generate unique registration ID
    const registrationId =
        generateRegistrationId();


    // ========================================
    // SAVE REGISTRATION TO SUPABASE
    // ========================================

    const { error } =
        await supabaseClient
            .from("registrations")
            .insert([
                {
                    registration_id: registrationId,
                    name: name,
                    student_id: studentId,
                    section: section,
                    specialization: selectedSpecialization,
                    year: year,
                    email: email,
                    phone: phone,
                    linkedin:
                        linkedin === ""
                            ? null
                            : linkedin,
                    goals: selectedGoals,
                    attendance: false
                }
            ]);


    // ========================================
    // HANDLE DATABASE ERROR
    // ========================================

    if (error) {

    console.error(
        "Supabase Error:",
        error
    );

    if (error.code === "23505") {

        alert(
            "Already Registered!\n\n" +
            "This Student ID is already registered for CODE YOUR IDENTITY."
        );

    } else {

        alert(
            "Registration failed.\n\n" +
            "Please try again."
        );
    }

    return;
}

    // ========================================
    // SUCCESS SCREEN DATA
    // ========================================

    document
        .getElementById("successRegistrationId")
        .textContent =
        registrationId;


    // ========================================
    // DIGITAL EVENT PASS
    // ========================================

    document
        .getElementById("passName")
        .textContent =
        name;

    document
        .getElementById("passStudentId")
        .textContent =
        studentId;

    document
        .getElementById("passSection")
        .textContent =
        section;

    document
        .getElementById("passSpecialization")
        .textContent =
        selectedSpecialization;

    document
        .getElementById("passYear")
        .textContent =
        year;

    document
        .getElementById("passRegistrationId")
        .textContent =
        registrationId;


   

    // ========================================
// GENERATE VERIFICATION URL
// ========================================

const verificationUrl =
    `${window.location.origin}/verify.html?id=${encodeURIComponent(registrationId)}`;


// ========================================
// GENERATE QR CODE
// ========================================

const qrContainer =
    document.getElementById("passQrCode");

// Clear previous QR
qrContainer.innerHTML = "";

// Generate QR
new QRCode(qrContainer, {
    text: verificationUrl,
    width: 120,
    height: 120,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

    new QRCode(qrContainer, {
    text: verificationUrl,
        width: 120,
        height: 120,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel:
            QRCode.CorrectLevel.H
    });


    // ========================================
    // SHOW SUCCESS SCREEN
    // ========================================

    document
        .getElementById("step3Section")
        .classList.add("hidden");

    document
        .getElementById("successSection")
        .classList.remove("hidden");


    // ========================================
    // HIDE NAVBAR
    // ========================================

    document
        .querySelector(".navbar")
        .classList.add("hidden");


    // ========================================
    // SCROLL TO TOP
    // ========================================

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// SAVE / PRINT EVENT PASS
// ========================================

function saveEventPass() {

    window.print();

}