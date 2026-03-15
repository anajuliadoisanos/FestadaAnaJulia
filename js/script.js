document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", event => {
                event.preventDefault();
                const href = link.getAttribute("href");

                document.body.classList.remove("loaded");

                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        }
    });
});
