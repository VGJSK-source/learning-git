document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    var tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltipElements.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });

    // Handle sidebar link clicks
    var sidebarLinks = document.querySelectorAll('.nav-link');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            sidebarLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Handling collapse hide event
    var collapses = document.querySelectorAll('.side-nav .collapse');
    collapses.forEach(function (collapse) {
        collapse.addEventListener('hide.bs.collapse', function () {
            var icon = this.previousElementSibling.querySelector('.dropdown-icon');
            icon.classList.remove('bi-caret-right-fill');
            icon.classList.add('bi-caret-down-fill');
        });

        // Handling collapse show event
        collapse.addEventListener('show.bs.collapse', function () {
            var icon = this.previousElementSibling.querySelector('.dropdown-icon');
            icon.classList.remove('bi-caret-down-fill');
            icon.classList.add('bi-caret-right-fill');
        });
    });
});
