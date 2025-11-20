document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").replace(/\/$/, "");

        if (linkPath === "") {
            if (currentPath === "" || currentPath === "/") {
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        } else if (currentPath === linkPath || currentPath.startsWith(linkPath + "/")) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });

    // const editionDropdown = document.getElementById('editionDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    document.querySelectorAll('.customize-edition-options').forEach(button => {
        const dropdown = button.closest('.dropdown'); 
        const selectedText = button.querySelector('span'); 
        const items = dropdown.querySelectorAll('.dropdown-item');

        items.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                items.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');

                selectedText.textContent = this.dataset.value || this.textContent.trim();
            });
        });
    });


    const selectedSearchFilterSpan = document.getElementById('selectedSearchFilter');
    let selectedSearchFilter = null;
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            dropdownItems.forEach(i => i.classList.remove('selected'));
            
            this.classList.add('selected');
            selectedSearchFilter = this;
            
            selectedSearchFilterSpan.textContent = this.textContent.trim();
        });
    });

    const navButtonsMobile = document.getElementById('navButtonsMobile');
    const navbarCollapse = document.getElementById('navbarNavDropdown');

    if (navbarCollapse && navButtonsMobile) {
        navButtonsMobile.classList.add('d-none');

        navbarCollapse.addEventListener('show.bs.collapse', function () {
            navButtonsMobile.classList.remove('d-none');
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            navButtonsMobile.classList.add('d-none');
        });
    }
});