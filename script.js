
// ===============================
// DESAMLI - INTERACTIVE JAVASCRIPT
// ===============================

// 1. LOADING SCREEN

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
});


// 2. MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 4. PORTFOLIO FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


// 5. CONTACT FORM - WHATSAPP

const contactForm = document.getElementById("contactForm");

// ضع رقم واتساب الشركة مع رمز الدولة بدون + أو مسافات
// مثال: 201234567890
const whatsappNumber = "+963 998787198";

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service) {
        alert("يرجى تعبئة جميع الحقول المطلوبة.");
        return;
    }

    if (whatsappNumber === "+963 998787198") {
        alert("يرجى إضافة رقم واتساب الشركة داخل ملف script.js أولاً.");
        return;
    }

    const whatsappMessage = `
مرحباً صمملي 👋

لدي طلب جديد:

الاسم: ${name}

رقم الهاتف: ${phone}

الخدمة المطلوبة: ${service}

تفاصيل المشروع:
${message || "لم يتم إضافة تفاصيل"}

بانتظار تواصلكم، شكراً لكم.
    `;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});


// 6. HEADER SCROLL EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.07)";
    } else {
        header.style.boxShadow = "none";
    }

});


// 7. CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }

});


// 8. CURRENT YEAR

const footerYear = document.querySelector(".footer-bottom");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} DESAMLI STUDIO. جميع الحقوق محفوظة.`;
}
