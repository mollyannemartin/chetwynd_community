(function () {
    const consent = localStorage.getItem("analyticsConsent");

    // If the visitor has already made a choice, apply it.
    if (consent === "accepted") {
        loadGoogleAnalytics();
    }

    if (consent === null) {
        showCookieBanner();
    }

    function loadGoogleAnalytics() {
        // Prevent Google Analytics from loading more than once.
        if (document.getElementById("google-analytics-script")) {
            return;
        }

        const script = document.createElement("script");
        script.id = "google-analytics-script";
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-8C8BTX8H22";

        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", "G-8C8BTX8H22");
    }

    function showCookieBanner() {
        const banner = document.createElement("div");
        banner.id = "cookie-banner";

        banner.innerHTML = `
            <div class="cookie-banner-content">
                <p>
                    We use Google Analytics to understand how people use this
                    website and improve it. Analytics cookies are optional.
                </p>

                <div class="cookie-banner-buttons">
                    <button id="accept-analytics">Accept analytics</button>
                    <button id="reject-analytics">Reject analytics</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        document.getElementById("accept-analytics").addEventListener("click", function () {
            localStorage.setItem("analyticsConsent", "accepted");
            loadGoogleAnalytics();
            banner.remove();
        });

        document.getElementById("reject-analytics").addEventListener("click", function () {
            localStorage.setItem("analyticsConsent", "rejected");
            banner.remove();
        });
    }
})();