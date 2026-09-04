const GA_MEASUREMENT_ID = "G-8C8BTX8H22";

function loadGoogleAnalytics() {
    if (window.googleAnalyticsLoaded) return;

    window.googleAnalyticsLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
}

function saveConsent(choice) {
    localStorage.setItem("cookieConsent", choice);

    if (choice === "accepted") {
        loadGoogleAnalytics();
    }

    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById("cookie-banner");

    if (banner) {
        banner.style.display = "none";
    }
}

function showCookieBanner() {
    const banner = document.getElementById("cookie-banner");

    if (banner) {
        banner.style.display = "block";
    }
}

function createCookieBanner() {
    const banner = document.createElement("div");

    banner.id = "cookie-banner";
    banner.innerHTML = `
        <div class="cookie-content">
            <p>
                We use Google Analytics to understand how visitors use this
                website and improve the service. Analytics cookies are only
                used if you accept them.
            </p>

            <div class="cookie-buttons">
                <button id="accept-cookies">Accept analytics cookies</button>
                <button id="reject-cookies">Reject analytics cookies</button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    document
        .getElementById("accept-cookies")
        .addEventListener("click", () => {
            saveConsent("accepted");
        });

    document
        .getElementById("reject-cookies")
        .addEventListener("click", () => {
            saveConsent("rejected");
        });
}

function createCookieSettingsButton() {
    const settingsButton = document.createElement("button");

    settingsButton.id = "cookie-settings-button";
    settingsButton.textContent = "Cookie settings";

    settingsButton.addEventListener("click", showCookieBanner);

    document.body.appendChild(settingsButton);
}

document.addEventListener("DOMContentLoaded", () => {
    const consent = localStorage.getItem("cookieConsent");

    createCookieBanner();
    createCookieSettingsButton();

    if (consent === "accepted") {
        loadGoogleAnalytics();
        hideCookieBanner();
    } else if (consent === "rejected") {
        hideCookieBanner();
    } else {
        showCookieBanner();
    }
});