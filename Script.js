const loginModal   = document.getElementById("login-modal");
const loginClose   = document.getElementById("login-close");
const countryModal = document.getElementById("country-modal");
const countryClose = document.getElementById("country-close");
const countryTrigger = document.getElementById("country-trigger");
const searchInput  = document.getElementById("country-search-input");
const countryItems = document.querySelectorAll(".country-item");
const selectedFlag = document.getElementById("selected-flag");
const selectedCode = document.getElementById("selected-code");


document.querySelectorAll(".open-login").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();                 // stay on the same page
        loginModal.classList.add("show");
    });
});


loginClose.addEventListener("click", function () {
    loginModal.classList.remove("show");
});

loginModal.addEventListener("click", function (e) {
    if (e.target === loginModal) {
        loginModal.classList.remove("show");
    }
});



function openCountryModal() {
    searchInput.value = "";
    filterCountries("");
    countryModal.classList.add("show");
    searchInput.focus();
}

function closeCountryModal() {
    countryModal.classList.remove("show");
}


countryTrigger.addEventListener("click", openCountryModal);


countryClose.addEventListener("click", closeCountryModal);


countryModal.addEventListener("click", function (e) {
    if (e.target === countryModal) {
        closeCountryModal();
    }
});


countryItems.forEach(function (item) {
    item.addEventListener("click", function () {
        selectedFlag.src = "./assests/flags/" + item.dataset.flag + ".png";
        selectedCode.textContent = item.dataset.code;
        closeCountryModal();
    });
});


function filterCountries(text) {
    const q = text.trim().toLowerCase();
    countryItems.forEach(function (item) {
        const name = item.querySelector(".country-name").textContent.toLowerCase();
        const code = item.dataset.code;
        item.style.display = (name.includes(q) || code.includes(q)) ? "flex" : "none";
    });
}

searchInput.addEventListener("input", function () {
    filterCountries(searchInput.value);
});


document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (countryModal.classList.contains("show")) {
            closeCountryModal();
        } else {
            loginModal.classList.remove("show");
        }
    }
});
