document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    let activeLink = sessionStorage.getItem('activeLink');

    if (!activeLink) {
        const firstLink = navLinks[0];
        if (firstLink) {
            firstLink.classList.add('active');
            activeLink = firstLink.getAttribute('href');
        }
    } else {
        const storedLink = document.querySelector(`nav ul li a[href="${activeLink}"]`);
        if (storedLink) {
            storedLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(link => link.classList.remove('active'));

            link.classList.add('active');

            sessionStorage.setItem('activeLink', link.getAttribute('href'));
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var studentMasterCards = document.querySelectorAll(".student-master-card");

    studentMasterCards.forEach(function(card) {
        var studentCardShow = card.querySelector(".student-card-show");
        var masterCardShow = card.querySelector(".master-card-show");

        card.addEventListener("mouseover", function() {
            if (studentCardShow) {
                studentCardShow.style.display = "block";
            }
            if (masterCardShow) {
                masterCardShow.style.display = "block";
            }
        });

        card.addEventListener("mouseout", function() {
            if (studentCardShow) {
                studentCardShow.style.display = "block";
            }
            if (masterCardShow) {
                masterCardShow.style.display = "block";
            }
        });
    });
});