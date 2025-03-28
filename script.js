    function includeHTML(file, elementId, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback(); // Run callback function after content loads
            });
    }

    // Load header and then initialize the burger menu
    includeHTML("header.html", "header-placeholder", function() {
        initializeBurgerMenu();
    });

    includeHTML("footer.html", "footer-placeholder");

    function initializeBurgerMenu() {
        const burger = document.querySelector(".hamburger");
        const nav = document.querySelector(".nav-container");

        if (burger && nav) {
            burger.addEventListener("click", function() {
                nav.classList.toggle("active");
                burger.classList.toggle("active"); // Toggle "active" on the burger

            
            });
        }
    }